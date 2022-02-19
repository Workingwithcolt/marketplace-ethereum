import {useState,useEffect } from 'react';


export const handler =  (web3,provider) => () =>{

    const [account,setAccount] = useState(null)
    useEffect(() =>{
        const getAccount =async () =>{
            const accounts = await web3.eth.getAccounts()//that return the all the accounts in the blockchain 
            setAccount(accounts[0])
        }
        web3 && getAccount()
    },[web3])   
   
    // {
    //        account : web3 ? "Test Account":"null"
    //    }
    

    useEffect(()=>{
        // window.ethereum && window.ethereum.on("accountsChanged",(accounts)  =>  setAccount(accounts[0] ? accounts[0] : "null" ))//if we 
                                                                                       //don`t have an account then return the null
    
        //we can do this in also another way  by use of the provider
        provider && 
        provider.on("accountChanged",
        account => setAccount(account[0] ? account[0] : "null"))

                                                                                    },[])
    return {account}
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

