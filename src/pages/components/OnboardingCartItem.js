import React from 'react'

const OnboardingCartItem = (props) => {
    const {CardDetails,changePageFuntion}=props 
    const callChangePageFuntion=()=>{
        changePageFuntion();
    }
    if(!CardDetails || !changePageFuntion) 
        return ;
  return (
    <div className={`height-100vh absolute bg-[#FFFFFF]`}
    >
    <img className='h-[70%] w-[100%] top-8' src={CardDetails.ImageUrl} alt='FruitImage'/>
     <div className='flex flex-col justify-center items-center'>
     <h1 className='font-montserrat text-[22px] font-extrabold leading-[28.83px] text-center text-[#09051C] w-[257px] h-[58px]'>{CardDetails.headingText}</h1>
      <p className='font-montserrat text-[12px] text-[#000000] font-thin leading-[21.66px] text-center
        w-[244px] h-[44px]'>{CardDetails.paraText}</p>
         <button className=' w-[9.5rem] h-[3rem] 
           rounded-tl-[15px]  rounded-bl-[15px] rounded-tr-[15px]  mt-[2rem] rounded-br-[15px] font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={callChangePageFuntion}>Next</button>
     </div> 
    </div>
  )
}

export default OnboardingCartItem
