import React from 'react'
import Menubar from './components/Menubar'
import PopularMenuCard from './components/PopularMenuCard';

const LocationList=[{id:1,tittle:'Soup'}];
const PopularMenuList=[{id:1,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716007469/Menu_Photo_sqmj1r.png',name:'Herbal Pancake',disc:'Warung Herbal',cost:'₹185'},{id:2,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716008313/Photo_Menu_xcl6kx.png',name:'Fruit Salad',disc:'Wijie Resto',cost:'₹185'},{id:3,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716008347/Photo_Menu_1_dq6dys.png',name:'Green Noddle',disc:'Noodle Home',cost:'₹185'}];

const PopularMenu = () => {
  return (
    <div className='min-h-screen  h-auto opacity-50 absolute w-[100%] text-[#B2AC88] bg-cover bg-[#FEFEFF]'
    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"10"}}
    >
      <Menubar/>
        <div className='flex justify-around mt-16'>
            <h1 className='h-20 w-56  text-[#09051C] ml-8  text-[31px] font-semibold  leading-[40.62px] text-left'>Find Your Favorite Food</h1>
            <div className='h-12 w-12 ml-10 mt-2 bg-[white] mr-4 flex justify-center items-center shadow-2xl rounded-[10px]'>
               <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715921424/Icon_Notifiaction_v9ors7.png' alt='NotificationIcon' className='w-5  h-6'/>
            </div>
          </div>
      <div className='flex justify-around'>
        <div className='w-72 h-12 bg-gray-300 ml-8 mt-4 opacity-30 shadow-xl flex flex-row rounded-[15px]'>
         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715922443/Icon_Search_uxt5zj.png' alt='searchIcon' className='h-6 ml-2 w-6 mt-3'/>
         <input type='text' placeholder='What do you want to order?' className='absolute outline-none text-[#B2AC88] font-montserrat text-[12px] font-normal leading-[14.63px] tracking-[0.5px] text-left bg-gray-300 left-16 h-12 w-52'/>
        </div>
        <div className='flex justify-center items-center mt-4 left-72 mr-4 ml-4 shadow-2xl bg-gray-200 w-12 opacity-30 rounded-2xl h-12 top-44'>
        <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715957830/Vector_1_rxeqq5.png' alt='filterIcon' className='h-4 w-4' />
        </div>
      </div>
     <ul className='flex flex-wrap'>{
        LocationList.map((each)=>(
            <LocationItem content={each} key={each.id}/>
        ))
     }
    </ul> 
     <div className='w-[100%] mt-8 '>
     <h1 className='text-[#09051C] font-montserrat text-[15px] font-bold leading-[19.65px] text-left ml-8'>Popular Menu</h1>
     </div>
     <ul className='list-none flex flex-col mt-4 items-center'>
       {
        PopularMenuList.map((each)=>(
            <PopularMenuCard item={each} key={each.id}/>
        ))
       } 
     </ul>
    </div>
  )
}

export default PopularMenu

// }bg-[#f2ebbf]


export const LocationItem=(prop)=>{
    const {content}=prop
    return (
        <li className='text-black flex justify-center relative rounded-xl m-2 opacity-50 items-center h-11 min-w-8 w-auto left-6 p-2 bg-gray-200'>
         <p className='font-montserrat text-[12px] font-[500] leading-[14.63px] tracking-[0.43px] text-left text-black'>{content.tittle}</p>
         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716006214/Icon_Close_bnynik.png' alt='closeIcon' className='h-4 w-4'/>
        </li>
    )
}




// 