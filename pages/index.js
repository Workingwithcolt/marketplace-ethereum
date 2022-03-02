import {default as BaseLayout} from  "../component/loyout/base/index";

import React from 'react'
import {default as Hero} from "@component/common/hero/index";
import {getAllCourse} from "C:/Users/admin/Blockchain/marketplace-eth/content/courses/fetcher" 
import {default as List} from '../component/course/list/index'

export default function Home({courses}) {
  //const { web3,isLoading} = useWeb3()
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
 