import React,{useEffect,useState,useMemo} from "react";

import detectEthereumProvider from "@metamask/detect-provider";

import Web3 from "web3";

import { setupHooks }from "../../../common/web3/hooks/setup-hook";



const Web3Context = React.createContext("c")

export  const Web3Provider = ({children}) =>{
    const [Web3Api,setWeb3Api] = useState({
        provider:null,
        web3:null,
        contract:null,
        isLoading:true
    })
    useEffect(() =>{
        const loadProvider =async () =>{
            const provider =await  detectEthereumProvider()
            console.log("Provider is "+provider)
            console.log(provider)
            if(provider){
                const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:7545")
                setWeb3Api({
                    provider,
                    web3,
                    contract:null,
                    isLoading:false
                })
                console.log(web3)
            }else{
                setWeb3Api(api => ({...api,isLoading:false}))
                console.log(Web3Api,"It is the Web3Api")
                console.log("Please install the metamask")
            }
        }
        loadProvider()
    },[])    

    const _Web3Api = useMemo(() =>{
        const {web3,provider} = Web3Api
    return {
        ...Web3Api,
        isWeb3Loaded:web3 != null,//What it return the true if the web3 is present
        getHooks:() => setupHooks(web3,provider),
       connect:provider ?
       async () => {
           try{
             provider.request({method:"eth_requestAccounts"})
           }catch(e){
               console.log("Cannot connect")
               location.reload()
           }
       }
        : 
       () => console.log("Tring To connect")
    }
    },[Web3Api])
    
    return(

        <Web3Context.Provider value ={Web3Api}>
        <Web3Context.Provider value = {_Web3Api}>
        {children}
        </Web3Context.Provider>
        </Web3Context.Provider>
    )
//1.5.2

}

export const  useWeb3  = () => { 
    return React.useContext(Web3Context);
}

export function useHooks(cb){
    const {getHooks} = useWeb3()
    return cb(getHooks());
    //here the getHooks() is the outside function i.e handler() function that function we pass to the cb 
    //which return the function that function we get at the navbar
}

