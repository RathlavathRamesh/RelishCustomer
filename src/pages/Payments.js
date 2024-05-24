
import React from 'react';

const Payments = () => {
  return (
    <div className="min-h-screen h-auto flex flex-col items-center bg-cover bg-[#FEFEFF]"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')" }}>
      <div className="relative w-full">
        <div className="h-8 w-8 bg-[#F2F1E6] absolute top-6 left-[1.5rem] flex justify-center items-center rounded-[10px]">
          <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png" alt="slicearrow" className="w-[2vw]" />
        </div>
        <h1 className="text-[#09051C] absolute top-16 left-16 font-montserrat text-[22px] font-bold leading-[32.76px]">
        Confirm Order - Delivery
        </h1>
      </div>

      <div className="flex flex-col items-center w-full mt-28 space-y-5">
        <div className="text-black flex-col h-24 w-80 p-2 bg-[#FFFFFF] shadow-md rounded-xl">
          <div className="flex justify-between">
            <p className="text-[#3B3B3B] font-montserrat opacity-30 text-[14px] ml-1 mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-left">Deliver To</p>
            <p className="text-[#3B3B3B] font-montserrat opacity-30 text-[14px] ml-1 mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-left">Edit</p>
          </div>
          <div className="flex p-2">
            <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716452720/Icon_Location_tpcuhv.png" alt="location" className="h-5 w-5 mt-2" />
            <h1 className="mt-2 ml-1 h-10 w-72 font-montserrat text-[15px] font-semibold leading-[19.65px] text-left text-[#09051C]">4517 Washington Ave. Manchester, Kentucky 39495</h1>
          </div>
        </div>
        <div className="text-black flex-col h-20 w-80 p-2 bg-[#FFFFFF] shadow-md rounded-xl">
          <div className="flex justify-between mt-1">
            <p className="text-[#3B3B3B] font-montserrat opacity-30 text-[14px] ml-1 mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-left">Payment Method</p>
            <p className="text-[#3B3B3B] font-montserrat opacity-30 text-[14px] ml-1 mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-left">Edit</p>
          </div>
          <div className="flex justify-between">
            <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716453109/paypal_Logo_djcsax.png" alt="Paypal" className="h-5 w-10 mt-4 block" />
            <h1 className="mt-4 ml-1 h-10 font-montserrat text-[14px] font-medium leading-[17.07px] text-left text-[#09051C]">2121 6352 8465 ****</h1>
          </div>
        </div>
         <div className="w-80 rounded-full mt-2 flex justify-center items-center h-14 bg-custom-gradient">
          <p className="text-[#000000] font-montserrat text-[16px] font-bold leading-[19.5px] tracking-[0.5px] text-left">Cash On Delivery</p>
        </div>
        {/* UPILITE */}
        <div className="w-80 rounded-full flex justify-center items-center h-14 bg-custom-gradient">
          <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716454787/image_46_txjwpz.png" alt="UPILITE" className="h-7 w-24" />
        </div>
        {/* Cards */}
        <div className="w-80 rounded-full flex justify-center items-center h-14 bg-custom-gradient">
          <p className="text-[#000000] font-montserrat text-[16px] font-bold leading-[19.5px] tracking-[0.5px] text-left">Cards</p>
        </div>
      </div>

      <div className="fixed bottom-4 w-[90%] bg-[#dcd4a8] bg-cover rounded-t-[22px] flex flex-col items-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1716263860/Group_sdjtvp.png')" }}>
        <div className="absolute inset-0 rounded-[22px]" style={{ backgroundColor: '#B2AC88', opacity: '0.7' }}></div>
        <div className="flex w-11/12 p-4 justify-between text-[#FEFEFF] z-10">
        <div className="m-4">
                <p className="font-montserrat text-[14px] font-medium leading-[17.07px] tracking-[0.5px]">Sub-Total</p>
                <p className="font-montserrat text-[14px] font-medium leading-[17.07px] tracking-[0.5px]">Delivery Charge</p>
                <p className="font-montserrat text-[14px] font-medium leading-[17.07px] tracking-[0.5px]">Discount</p>
                <h1 className="font-montserrat text-[18px] mt-4 font-semibold leading-[21.94px] tracking-[0.6428571px]">Total</h1>
              </div>
              <div className="m-4">
                <p className="font-montserrat text-[14px] font-medium leading-[17.07px] tracking-[0.5px]">INR 100</p>
                <p className="font-montserrat text-[14px] font-medium leading-[17.07px] tracking-[0.5px]">INR 65</p>
                <p className="font-montserrat text-[14px] font-medium leading-[17.07px] tracking-[0.5px]">INR 20</p>
                <h1 className="font-montserrat text-[18px] mt-4 font-semibold leading-[21.94px] tracking-[0.6428571px]">₹185</h1>
                </div>
              </div>
              <button className="w-80 h-12 mb-4 bg-[#FFFFFF] rounded-[15px] font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.5px] text-[#B2AC88] z-10">
                Place My Order
              </button>
        </div>
      </div>
    );
  };
  
  export default Payments;
  