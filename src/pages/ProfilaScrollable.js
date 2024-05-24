import React, { useState } from 'react';
import YourOrdersCart from './components/YourOrdersCart';
import Menubar from './components/Menubar';

const FavoriteOrderList = [
    { id: 1, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716202070/Menu_Photo_1_zplo1t.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '₹185',buttonText:'Buy Again' },
    { id: 2, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716206427/Menu_Photo_2_f9vujf.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '₹185',buttonText:'Buy Again'},
    { id: 3, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716523120/Photo_Menu_3_xdaizi.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '₹185',buttonText:'Buy Again'},
    { id: 4, imageUrl: 'https://res.cloudinary.com/dnovcmruv/image/upload/v1716523120/Photo_Menu_3_xdaizi.png', MenuName: 'Spicy fresh crab', RestaurantName: 'Waroenk kita', price: '₹185',buttonText:'Buy Again'}
  ];

const ProfilaScrollable = () => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleContainer = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="min-h-screen bg-cover  bg-no-repeat bg-center"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1716521111/Photo_Profile_4_srfctx.png')" }}>
        <div className="w-full h-[100vh] flex justify-center items-end ">
          <div
            className={`w-[376px] bg-[#FEFEFF] text-black rounded-t-[30px] overflow-y-auto transition-all duration-500 ${isExpanded ? 'h-[80vh]' : 'h-[30vh]'}`}>
              <div className='flex justify-center h-auto'>
                    <div className='bg-[#B2AC88] border-none rounded-full  fixed mt-4 w-[40px]'onClick={toggleContainer} >
                        <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716471123/Scrooll_Tools_qjqawi.png' alt='scrolleTool' className='h-2 w-[40px]' />
                    </div>
              </div>
              <div className='flex justify-between mt-2 p-2'>
                   <div className='bg-[#B2AC88] opacity-50 flex justify-center min-w-20 w-auto p-2 h-9 rounded-[19px] left-9 items-center'>
                   <p className='font-montserrat text-[12px]  font-semibold leading-[15.72px]'>Member Gold</p>
                  </div>
              </div>
              <div className='flex justify-between'>
                <div>
                   <h1 className='text-[#09051C] font-montserrat text-[25px] mt-5 font-semibold leading-[25.72px] text-center ml-4'>Anam Wusono</h1>
                    <p className='text-[#3B3B3B] opacity-30 mt-[2px] font-montserrat ml-4 text-[14px] font-medium leading-[17.07px] tracking-[0.5px]'>anamwp66@gmail.com</p>
                </div>
                <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716520492/Edit_Icon_1_hnwwsf.png' alt='EditIcon' className='h-5 w-5 m-5'/>
              </div>
                <div className='flex m-4'>
                    <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716521784/Voucher_Icon_jkyrtz.png' alt='Vocher' className='h-5 w-5'/>
                    <p className='text-[#09051C] font-montserrat text-[15px] font-semibold leading-[19.65px]'>You Have 3 Voucher</p>
                </div>
              <h1 className='text-[#09051C] font-montserrat bg-[] text-[15px] font-bold leading-[19.65px] text-left ml-6 mt-10'>Favorite</h1>
                <ul className='list-none top-4 mb-16 bg-[#FEFEFF]'>
                {
                   FavoriteOrderList.map((each)=>((
                    <YourOrdersCart Item={each} key={each.id}/>
                   )))
                } 
                </ul>
             <Menubar/>
          </div>
        </div>
      </div>
    );
  };
  

export default ProfilaScrollable
