import React from 'react'

const UpIdsCard = () => {
  return (
    <div className="min-h-screen h-auto flex flex-col 5 items-center bg-cover bg-[#FEFEFF]"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')" }}>
      <div className="relative w-full">
        <div className="h-8 w-8 bg-[#F2F1E6] opacity-50 absolute top-6 left-[1.5rem] flex justify-center items-center rounded-[10px]">
          <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png" alt="slicearrow" className="w-[2vw]" />
        </div>
        <h1 className="text-[#09051C] absolute top-20 left-16 font-montserrat text-[25px] font-bold leading-[32.76px]">
           UPI : IDs
        </h1>
      </div>
      <div className="flex flex-col items-center w-full mt-32 space-y-5">
        <div className="text-black flex-col h-20 w-80 p-2 bg-[#FFFFFF] shadow-md rounded-xl">
          <div className="flex justify-between items-center">
              <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716523981/image_48_qjqyhq.png" alt="Gpay" className="h-12 w-20 " />
              <h1 className=" h-10 font-montserrat text-[14px] font-medium leading-[17.07px] text-left mt-5 text-[#09051C]">rohankolhapure****</h1>
          </div>
        </div>
        <div className="text-black flex-col h-20 w-80 p-2 bg-[#F6F6F6] shadow-md rounded-xl">
          <div className="flex justify-between items-center">
              <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716524972/image_47_eadwcv.png" alt="PhonePay" className="h-12 w-16 mt-4" />
              <h1 className=" h-10 font-montserrat text-[14px] opacity-30 font-medium leading-[17.07px] text-left mt-5 text-[#09051C]">shashankprabhu****</h1>
          </div>
        </div>
        <div className="text-black flex-col h-20 w-80 p-2 bg-[#F6F6F6] shadow-md rounded-xl">
          <div className="flex justify-between items-center">
              <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716525230/image_49_groce9.png" alt="Paytm" className="h-6 w-20 " />
              <h1 className=" h-10 font-montserrat text-[14px] opacity-30 font-medium leading-[17.07px] text-left mt-5 text-[#09051C]">sahilashtekar****</h1>
          </div>
        </div>
      </div>
      </div>
    );
}

export default UpIdsCard
