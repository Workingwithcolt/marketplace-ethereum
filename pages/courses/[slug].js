import {default as Modal} from "C:/Users/admin/Blockchain/marketplace-eth/component/course/modal/index"

import {default as Curiculm} from 'C:/Users/admin/Blockchain/marketplace-eth/component/course/curiculm/index'

import {default as Keypoints} from 'C:/Users/admin/Blockchain/marketplace-eth/component/course/Keypoints/index'
  
import {default as Hero } from "C:/Users/admin/Blockchain/marketplace-eth/component/course/hero/index"

import { getAllCourse } from "content/courses/fetcher";

import {default as BaseLayout} from '../../component/loyout/base/index'


export default function Course({course}) {
    return (
      <BaseLayout>
      <div className="relative max-w-7xl mx-auto px-4">
        {/*------ HERO STARTS ------*/}
        
        <Hero

        title = {course.title}
        description ={course.description}
        Img ={course.coverImage}
        />
        {/*------ HERO ENDS ------*/}
  
        {/*------ KEYPOINT STARTS ------*/}
        <Keypoints
        points = {course.wsl}
        />
        {/*------ KEYPOINT ENDS ------*/}
  
        {/*------ LECTURES STARTS ------*/}
        <Curiculm
        locked = {true}
        />
        {/*------ LECTURES ENDS ------*/}
  
        {/* MODAL STARTS */}
        <Modal/>
        {/* MODAL ENDS */}
      </div>
      </BaseLayout>
    )
  }

  export function getStaticPaths(){
    const {data} = getAllCourse();
    return{
      paths:data.map(c => ({
        params:{
          slug:c.slug
        }//Here the path will become an array that hold the params only 
      })),
      fallback:false
    }
  }
  //Here when i click on the  any course in the website i got the  the particular params of that course by path 
  export function getStaticProps({params}){
    const {data} = getAllCourse()
    const course = data.filter(c =>c.slug === params.slug)[0]
    return{
      props:{
        course
      }
    }
  }
