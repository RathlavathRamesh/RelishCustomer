import React from 'react'
import YourOrdersCart from './components/YourOrdersCart';

const OrdersList = [
    { id: 1, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716202070/Menu_Photo_1_zplo1t.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '₹185',active:true,buttonText:'Process' },
    { id: 2, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716206427/Menu_Photo_2_f9vujf.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '₹185',active:true ,buttonText:'Process'},
    { id: 3, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716462774/Menu_Photo_4_dx93x2.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '₹185',active:false ,buttonText:'Process'},
    { id: 3, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716462808/Menu_Photo_5_i5ptaf.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '₹185',active:false ,buttonText:'Process'}
  ];
const Yourorders = () => {
    return (
        <div className='min-h-screen  h-auto opacity-10 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"10"}}
        >
            <div className='flex justify-around mt-12'>
                <h1 className='h-20 w-56  text-[#09051C] ml-8  text-[31px] font-semibold  leading-[40.62px] text-left'>Your Orders</h1>
                <div className='h-12 w-12 ml-10 mt-2 bg-[white] mr-4 flex justify-center items-center shadow-2xl rounded-[10px]'>
                   <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715921424/Icon_Notifiaction_v9ors7.png' alt='NotificationIcon' className='w-5  h-6'/>
                </div>
              </div>
          <div className='flex justify-around '>
            <div className='w-72 h-12 bg-gray-300 ml-8 shadow-xl flex flex-row rounded-[15px]'>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715922443/Icon_Search_uxt5zj.png' alt='searchIcon' className='h-4 ml-2 w-4 mt-4 '/>
             <input type='text' placeholder='What do you want to order?' className='absolute outline-none text-[#B2AC88] font-montserrat text-[12px] font-normal leading-[14.63px] tracking-[0.5px] text-left bg-gray-300 left-16 h-12 w-52'/>
            </div>
            <div className='flex justify-center items-center  left-72 mr-4 ml-4 shadow-2xl bg-gray-300 w-12  rounded-2xl h-12 top-44'>
              <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715927823/Filter_xky0jt.png' alt='filterIcon' className='h-6 w-6' />
            </div>
          </div>
          <div className='flex justify-center '>
            <button className='bg-[#B2AC88] fixed bottom-5 rounded-[22px] h-12 w-80 text-[#FEFEFF] font-montserrat text-base font-bold leading-4.5 tracking-wider'>Checkout</button>
          </div>
          <ul className='list-none flex flex-col mb-20 items-center '>
            {
            OrdersList.map((each) => (
                <YourOrdersCart Item={each} key={each.id} />
            ))
            }
        </ul>
        </div>
      )
}

export default Yourorders
