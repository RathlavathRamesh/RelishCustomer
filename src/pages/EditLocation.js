import React from 'react'

const EditLocation = () => {
    return (
        <div className="min-h-screen h-auto flex flex-col items-center bg-cover bg-[#FEFEFF]"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')" }}>
          <div className="relative w-full">
            <div className="h-8 w-8 bg-[#F2F1E6] opacity-50 absolute top-6 left-[1.5rem] flex justify-center items-center rounded-[10px]">
              <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png" alt="slicearrow" className="w-[2vw]" />
            </div>
            <h1 className="text-[#09051C] absolute top-20 left-16 font-montserrat text-[25px] font-bold leading-[32.76px]">
            Shipping
            </h1>
          </div>
          <div className="flex flex-col items-center w-full mt-32 space-y-5">
             <div className='text-black w-80 h-28 bg-[#FFFFFF] shadow-md rounded-[22px]'>
                <p className="text-[#3B3B3B]  font-montserrat opacity-30 text-[14px] ml-2 mt-2 font-medium leading-[17.07px] tracking-[0.5px] ">Order Location</p>
                <div className="flex p-2">
                    <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716452720/Icon_Location_tpcuhv.png" alt="location" className="h-9 w-9 mt-2" />
                    <h1 className="mt-2 ml-1 h-10 w-72 font-montserrat text-[15px] font-semibold leading-[19.65px] text-left text-[#09051C]">8502 Preston Rd. Inglewood, Maine 98380</h1>
               </div> 
             </div>
             <div className='text-black w-80 h-32 bg-[#FFFFFF] shadow-md rounded-[22px]'>
                <p className="text-[#3B3B3B]  font-montserrat opacity-30 text-[14px] ml-2 mt-2 font-medium leading-[17.07px] tracking-[0.5px] ">Deliver To</p>
                <div className="flex p-2">
                    <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716452720/Icon_Location_tpcuhv.png" alt="location" className="h-9 w-9 mt-2" />
                    <h1 className="mt-2 ml-1 h-10 w-72 font-montserrat text-[15px] font-semibold leading-[19.65px] text-left text-[#09051C]">4517 Washington Ave. Manchester, Kentucky 39495</h1>
               </div> 
               <p className='text-[#B2AC88] font-montserrat opacity-50 text-[14px] ml-8 mt-2 font-medium leading-[17.07px] tracking-[0.5px]'>Set location</p>
             </div>
          </div>
          </div>
        );
}

export default EditLocation
