import React from 'react'

const VocherList=[{id:1,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716103584/Frame_xpxq7j.png',headColor:'#FFFFFF',BgColor:'#B2AC88',BtnColor:'#009C51'}]
const VocherPromo = () => {
    return (
        <div className='min-h-screen h-auto opacity-5  w-[100%]  bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}} >
            {/* <Menubar/> */}
           <div className='h-8 w-8 bg-[#F2F1E6] top-10 absolute left-[1.5rem] flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-64 h-16 text-[#09051C] absolute top-10 left-6 font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
             Voucher Promo
             </h1>
             <div className=' items-center ml-80 top-24 justify-center absolute'>
                <div className='bg-[#B2AC88] relative w-80 h-36 rounded-lg'
                        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715928654/Image_ivfd5i.png')" }}>
                    <h1 className='text-[white] absolute  h-11 w-36 left-44 mt-4 font-montserrat text-[17px] font-semibold leading-[22.27px] text-left'>Special Deal For October</h1>
                    <button className='h-8 w-20 absolute rounded-md bg-[#FFFFFF] font-montserrat font-semibold left-44 top-20 text-[#009C51] text-[12px]'>Buy Now</button>
                </div>
           </div>
             <div className=' items-center ml-80 top-64 justify-center absolute'>
               <div className='bg-[#E9F7BA] relative w-80 h-36 rounded-lg'
                    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1716130337/Image_6_hn9icj.png')" }}>
                    <h1 className='text-[#6B3A5B] absolute  h-11 w-36 left-44 mt-4 font-montserrat text-[17px] font-semibold leading-[22.27px] text-left'>Special Deal For October</h1>
                    <button className='h-8 w-20 absolute rounded-md bg-[#FFFFFF] font-montserrat font-semibold left-44 top-20 text-[#6B3A5B] text-[10px]'>Buy Now</button>
               </div>
            </div>
            </div>
            <div className='flex justify-center'>
              <button className='fixed bottom-10 w-56 h-10 mb-4 rounded-2xl font-montserrat text-[14px] font-semibold leading-[40.96px]  text-[#ffffff] bg-[#B2AC88]'>Check out</button>
            </div>
            
        </div>
  )
}

export default VocherPromo
