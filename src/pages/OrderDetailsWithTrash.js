import React from 'react'
import OrderItemCard from './components/OrderItemCard'

const OrdersList = [
  { id: 1, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716202070/Menu_Photo_1_zplo1t.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '$ 35' },
  { id: 2, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716206427/Menu_Photo_2_f9vujf.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '$ 35' },
  { id: 3, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716206582/Menu_Photo_3_d8jiaf.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '$ 35' }
];

const OrderDetailsWithTrash = () => {
  
    return (
        <div className='min-h-screen flex flex-col items-center bg-cover bg-[#FEFEFF]'
          style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')" }}>
          <div className='relative w-full'>
            <div className='h-8 w-8 bg-[#F2F1E6] absolute top-10 left-[1.5rem] flex justify-center items-center rounded-[10px]'>
              <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]' />
            </div>
            <h1 className="text-[#09051C] absolute top-24 left-16 font-montserrat text-[25px] font-bold leading-[32.76px]">
              Order details
            </h1>
          </div>
          <ul className='list-none flex flex-col items-center mt-32'>
            {
              OrdersList.map((each) => (
                <OrderItemCard Item={each} key={each.id} />
              ))
            }
          </ul>
          <div className="mt-6 flex flex-row justify-center w-full">
            <div className="h-16 shadow-md flex flex-col items-center justify-center p-2 bg-[white] rounded-xl w-36 mx-2">
              <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716207268/Group_782_ixrf4e.png" className="h-[3vh] w-[6vw]" />
              <p className="font-montserrat text-[9px] mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-black">Delivery</p>
            </div>
            <div className="h-16 shadow-md flex flex-col items-center justify-center p-2 bg-[white] rounded-xl w-36 mx-2">
              <img src="https://res.cloudinary.com/dnovcmruv/image/upload/v1716210856/Vector_2_mcdidy.png" className="h-[3vh] w-[6vw]" />
              <p className="font-montserrat text-[9px] mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-black">Drive-n-Pick</p>
            </div>
          </div>
          <div className='fixed bottom-5 w-[90%] bg-[#dcd4a8] bg-cover rounded-t-[22px] flex flex-col items-center'
            style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1716263860/Group_sdjtvp.png')" }}>
            <div className='absolute inset-0 rounded-[22px]' style={{ backgroundColor: '#B2AC88', opacity: '0.7' }}></div>
            <div className='flex w-11/12 p-4 justify-between text-[#FEFEFF] z-10'>
              <div className='m-4'>
                <p className='font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.5px]'>Sub-Total</p>
                <p className='font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.5px]'>Delivery Charge</p>
                <p className='font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.5px]'>Discount</p>
                <h1 className="font-montserrat text-[18px] font-bold leading-[21.94px] tracking-[0.6428571px]">Total</h1>
              </div>
              <div className='m-4'>
                <p className='font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.5px]'>INR 100</p>
                <p className='font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.5px]'>INR 65</p>
                <p className='font-montserrat text-[14px] font-semibold leading-[17.07px] tracking-[0.5px]'>INR 20</p>
                <h1 className="font-montserrat text-[18px] font-bold leading-[21.94px] tracking-[0.6428571px]">₹185</h1>
              </div>
            </div>
            <button className='w-80 h-12 mb-4 bg-[#FFFFFF] rounded-[15px] font-montserrat text-[14px] font-bold leading-[17.07px] tracking-[0.5px] text-[#B2AC88] z-10'>
              Place My Order
            </button>
          </div>
        </div>
      )
}

export default OrderDetailsWithTrash
