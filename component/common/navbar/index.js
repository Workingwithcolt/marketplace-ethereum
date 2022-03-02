
import Link from "next/link"
import React from 'react'

import {useAccount} from "@component/hooks/web3/index"
// import {useAccount} from "../web3/hooks/useAccount"
import {useRouter} from "next/dist/client/router"
import {useWeb3} from "C:/Users/admin/Blockchain/marketplace-eth/component/providers/providers/web3/index"
import Button from "C:/Users/admin/Blockchain/marketplace-eth/component/common/button/index"
export default function Navbar(props){
    const {pathname} = useRouter()
    const {connect,isLoading,requireinstall}  = useWeb3()
    // const a = useAccount()//here it return the function then that particular function we get at the a 
    //then we call it and extract value of account by distructurising
    // const accounts = a()
    //  console.log(accounts+"It is the account")
    // console.log("It is the account")
    const {account} = useAccount()
    // const {account}   = c()
    // // const {{account}} = useAccount(web3)
    // const _useAccount =  useAccount(web3)
    // console.log(_useAccount)
    // const {account} = _useAccount()//Here when we call the useAccount function that time it return me 
    // The function we call it hrere it as _useAccount()
    // console.log(account)
    // console.log("It is account")
    return(
        <section>      
           
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        {/* {
            account 
        } */}
            <nav className="relative" aria-label="Global">
            <div className="flex justify-between">
                <div>
                <Link href ="/">
                    <a 
                    href="#" 
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                    Home
                    </a>
                </Link>
                <Link href ="/marketplace">
                    <a 
                    
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                    Marketplace
                    </a>
                </Link>
                <Link href ="/blogs">
                    <a 
                    href="#" 
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                    Blogs
                    </a>
                </Link>
                </div>
                <div>

                <Link href ="/wishlist">
                    <a 
                    href="#" 
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                    Wishlist
                    </a>
                </Link>
                {
                 isLoading 
                ?//It means the web3 provider is loaded on the computer
                <Button
                    disabled = {true}
                    onClick = {connect}>Loading...
                </Button>:
                 account.data ?
                <Button 
                disabled = {false}
                >
                    Hi There {account.isAdmin ? "Admin" : null}
                </Button>
                :
                requireinstall ?
                <Button 
                disabled = {true}
                    // onClick = {() => router.push("https://metamask.io/download.html")}
                    onClick = {() =>window.open("https://metamask.io/download.html","_blank")}
                    >Installing Metamask 
                    {/* When  the ganache is not connected */}
                </Button>
                :
                <Button
                disabled = {false}
                    onClick = {connect}>Connect
                </Button>
                // <Button 
                // disabled = {true}
                //     // onClick = {() => router.push("https://metamask.io/download.html")}
                //     onClick = {() =>window.open("https://metamask.io/download.html","_blank")}
                //     >Installing Metamask 
                //     {/* When  the ganache is not connected */}
                // </Button>//Here We use the router because the We want to make the functionaltity such that  when we 
                //click on the button we get to the metamask installation webpage That When I click On that button 
                //I go to that Webpage in the Current open Site That overriding the https://localhost:3000
                //But When You want to open the Webpage Url in the new blank page we use the window object
                }   
                </div>
             </div>
            </nav>
        </div>
     {
         account.data && 
         !pathname.includes("/marketplace") &&
            <div className ="flex justify-end pt-2 sm:px-6 lg:px-8">
            <div className = "text-white bg-indigo-600 rounded-md p-2"> 
                {account.data}
            </div>
            </div>
     }
        </section>
    )
}