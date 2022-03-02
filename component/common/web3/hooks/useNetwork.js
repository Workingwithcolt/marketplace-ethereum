import  {useEffect} from "react"
import useSWR from 'swr'
const NETWORK = {
    1:"Ethereum Main Network",
    1337:"Ganache"
}

const targetNetwork = NETWORK[process.env.NEXT_PUBLIC_TARGET_CHAIN_TO]

export const handler = (web3,provider) => () =>{
    const {mutate,data,...rest} = useSWR(() =>web3 ? "web3/network" : null,
        async () =>{
            const ChainId = await web3.eth.getChainId()
            // const netId = await web3.eth.net.getId() That return the network id But we want to ChainId
            return NETWORK[ChainId]
        }
)
 
//requirement of the to reload the data and error
console.log("it is me")
useEffect(() =>{
    provider && 
    provider.on("chainChanged",ChainId => mutate(parseInt(ChainId,16)))
},[web3]) 
    return {
        Network:{
           data,
           mutate,
           target:targetNetwork,
           isSupported:data == targetNetwork,
           ...rest
        }
    }
}
//here The mutate Update the swr data reexecute 