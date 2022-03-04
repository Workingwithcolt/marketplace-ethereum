import {default as BaseLayout} from  "../../component/loyout/base/index";

import {useEffect,useState} from "react"

import {default as Walletbar} from "../../component/common/web3/walletbar/index"

import React from 'react'

import {getAllCourse} from "C:/Users/admin/Blockchain/marketplace-eth/content/courses/fetcher" 

import {default as List} from '../../component/course/list/index'

import  {useAccount,useNetwork}  from "../../component/hooks/web3/index"

import {Button} from "@component/common/button";

import {default as OrderModal} from "@component/order/modal";



export  default function Marketplace({courses}) {
   //const { web3,isLoading} = useWeb3()
    // console.log(web3+"it is the web3Api")
    // console.log(isLoading)
    const  [selectedCourse,setSelectedCourse] = useState(null)

    const {Network} = useNetwork()
    
    const {account}= useAccount()

  return (
    <div>
      
      {/* {
                         isLoading ? "Is Loading Web3":"IS NOT  Loading the web3"
      } */}
            <div className = "py-4">
            
            <Walletbar 
            account = {account.data}
            data = {Network.data}
            target = {Network.target}
            hasinitialresponse= {Network.hasinitialresponse}
            isSupported  =  {Network.isSupported}
            />
            </div>
            <List courses = {courses} 
            Footer = {({c}) =>
            <div className ="mt-4">
              <Button
              onClick = {()=>{setSelectedCourse(c)}}
              >
                Purchase
              </Button>
            </div>
            }
            >
            </List>
            {
              selectedCourse &&
              <OrderModal course = {selectedCourse}
              onClose = {() =>setSelectedCourse(null)}
              />
            }
            
            </div>
  )
}


export function getStaticProps(){
  const {data} = getAllCourse()
  return{
    props:{
      courses:data
    }
  }
}
Marketplace.Layout = BaseLayout
