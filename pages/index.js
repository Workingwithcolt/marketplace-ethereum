import {default as BaseLayout} from  "../component/loyout/base/index";
import {default as Breadcrumbs} from "../component/common/breadcrumbs/index";
import {default as EthRates} from '../component/common/web3/ethRates/index';
import {default as Walletbar} from '../component/common/web3/walletbar/index';

import React from 'react'
import {default as Navbar} from "@component/common/navbar/index";
import {default as Footer} from "@component/common/footer/index";
import {default as Hero} from "@component/common/hero/index";
import {getAllCourse} from "C:/Users/admin/Blockchain/marketplace-eth/content/courses/fetcher" 

// import {Walletbar,EthRates} from '@component/common/web3/index'
// import {Navbar,BaseLayout,Breadcrumbs,Hero,Footer} from '@component/common/index'
import {default as List} from '../component/course/list/index'
import {default as Card} from '../component/order/card/index'

import {useWeb3}  from "../component/providers/providers/web3/index"

export default function Home({courses}) {
  // const { web3,isLoading} = useWeb3()
    // console.log(web3+"it is the web3Api")
    // console.log(isLoading)
  return (
    <div>
      <BaseLayout>
      {/* {
                         isLoading ? "Is Loading Web3":"IS NOT  Loading the web3"
      } */}
            <Hero/>
            <List courses = {courses}/>
            </BaseLayout>
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
 