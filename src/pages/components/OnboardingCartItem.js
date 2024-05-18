import React from 'react'

const OnboardingCartItem = (props) => {
    const {CardDetails,changePageFuntion}=props 
    const callChangePageFuntion=()=>{
        changePageFuntion();
    }
    if(!CardDetails || !changePageFuntion) 
        return ;
  return (
    <div className="max-h-screen h-auto overflow-hidden relative w-[100%] bg-cover">
      <img className='h-[420px] w-[400px] top-14' src={CardDetails.ImageUrl} alt='FruitImage'/>
     <h1 className='font-montserrat relative text-[22px] font-extrabold leading-[28.83px] w-64 left-16 top-65 text-center text-[#09051C]'>{CardDetails.headingText}</h1>
      <p className='font-montserrat relative text-[12px] mt-2 text-[#000000] font-thin leading-[21.66px] text-center left-16 w-64 h-11'>{CardDetails.paraText}</p>
       <div className='text-center'>
        <button className='mt-12 w-40 h-14 mb-10 rounded-[15px] font-montserrat text-[16px] font-bold leading-[20.96px]  text-[#ffffff] bg-[#B2AC88]' onClick={callChangePageFuntion}>Next</button>
        </div>
    </div>
  )
}
{/*  */}

export default OnboardingCartItem
