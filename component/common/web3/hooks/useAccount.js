import {useEffect } from 'react';

import useSWR from 'swr'

const adminAddresses = {
    "0xf53da6fe60c92afff74c87b28772ae4a37e2b3df28026cec5e1c803b41807407":true//That is in the form of keccac256
}

export const handler =  (web3,provider) => () =>{
    // const [account,setAccount] = useState(null)
    const {data,mutate,...rest} = useSWR(() =>
         web3 ? "web3/accounts": null ,//It is the identifer Which can be last name of the website or the first name of the website      
        async () =>{
            const accounts = await web3.eth.getAccounts()
            return accounts[0]//That is the response of the function When we call the swrResponse()        
    })//That function is call at the background 
    
    // useEffect(() =>{
    //     const getAccount =async () =>{
    //         const accounts = await web3.eth.getAccounts()//that return the all the accounts in the blockchain 
    //         setAccount(accounts[0])
    //     }
    //     web3 && getAccount()
    // },[web3])   
   
    // {
    //        account : web3 ? "Test Account":"null"
    //    }
    

    useEffect(()=>{
        // window.ethereum && window.ethereum.on("accountsChanged",(accounts)  =>  setAccount(accounts[0] ? accounts[0] : "null" ))//if we 
                                                                                       //don`t have an account then return the null
    
        //we can do this in also another way  by use of the provider
        console.log("useEffect is called in the useAccount")
        provider && 
        provider.on("accountChanged",
        accounts => mutate(accounts[0] ? accounts[0] : "null"))
    },[provider])
    console.log("It is run again")
    return {
        account:{
            data,
            isAdmin:(data && adminAddresses[web3.utils.keccak256(data)]),
            mutate,
            ...rest
        }
    }
}

// export function useAccount(web3){
//     account: web3 ?
//             "Test Account":
//             "null"
//         return function(){
//         return account
//     }
// }


// export const  useAccount =(web3) => {
//     return () =>{
//         return {
//             accounts:web3 ? 
//             "Test Account"
//             :"null"
//         }
//     }
// }

