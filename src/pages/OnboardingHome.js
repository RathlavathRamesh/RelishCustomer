import React, { useState } from 'react'
import OnboardingCartItem from './components/OnboardingCartItem'
import { useRouter } from 'next/router';

const PageItemsList=[{id:1,ImageUrl:"https://res.cloudinary.com/dnovcmruv/image/upload/v1715658322/Illustartion_nqesqv.png",headingText:"Find your  Comfort Food here",paraText:"Here You Can find a chef or dish for every taste and color. Enjoy!"},{id:2,ImageUrl:"https://res.cloudinary.com/dnovcmruv/image/upload/v1715851460/Illustration_1_b2nrf0.png",headingText:"Relish is Where Your Comfort Food Lives",paraText:"Enjoy a fast and smooth food delivery at your doorstep"}]

const OnboardingHome = () => {
  const [pageNum,setpageNum]=useState(0);
  const router=useRouter();

  const changePageFuntion=()=>{
    if(pageNum===1){
       router.replace('/SignIn')
       return ;
    }
    setpageNum(pageNum+1);
  }
  const Item=PageItemsList[pageNum];
  console.log(pageNum)
  return (
    <div className="h-screen bg-[#FFFFFF]">
     <OnboardingCartItem CardDetails={Item} key={Item.id} changePageFuntion={changePageFuntion}/>
    </div>
  )
}

export default OnboardingHome
