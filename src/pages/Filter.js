import React from 'react'

const TypesList=[{id:1,tittle:'Restautent'},{id:2,tittle:'Menu'},{id:3,tittle:'others'}];
const LocationList=[{id:1,tittle:'1 km'},{id:2,tittle:'>10 km'},{id:3,tittle:'<10 km'}];
const FoodList=[{id:1,tittle:'Cake'},{id:2,tittle:'Soup'},{id:3,tittle:'Main Course'},{id:4,tittle:'Appetizer'},{id:5,tittle:' Dessert'}]

const Filter = () =>{
    return (
      <div className='min-h-screen  h-auto opacity-10 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
      style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"10"}}
      >
          <div className='flex justify-around mt-16'>
              <h1 className='h-20 w-56  text-[#09051C] ml-8  text-[31px] font-semibold  leading-[40.62px] text-left'>Find Your Favorite Food</h1>
              <div className='h-12 w-12 ml-10 mt-2 bg-[white] mr-4 flex justify-center items-center shadow-2xl rounded-[10px]'>
                 <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715921424/Icon_Notifiaction_v9ors7.png' alt='NotificationIcon' className='w-5  h-6'/>
              </div>
            </div>
        <div className='flex items-center'>
          <div className='w-80 h-12 bg-[#f2ebbf] ml-8 mt-4 opacity-30 shadow-xl flex flex-row rounded-[15px]'>
           <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715922443/Icon_Search_uxt5zj.png' alt='searchIcon' className='h-6 ml-4 w-6 mt-3'/>
           <input type='text' placeholder='What do you want to order?' className='absolute outline-none text-[#B2AC88] font-montserrat text-[12px] font-normal leading-[14.63px] tracking-[0.5px] text-left bg-[#f2ebbf] left-20 h-12 w-52'/>
          </div>
        </div>
        <div className='w-[100%] mt-8 '>
        <h1 className='text-[#09051C] font-montserrat text-[15px] font-semibold leading-[19.65px] text-left ml-8'>Type</h1>
        </div>
        <ul className='list-none flex flex-row flex-wrap'>
          {
            TypesList.map((each)=>(
                <TypeItem content={each} key={each.id}/>
            ))
          }
        </ul>
        <div className='w-[100%] mt-8 '>
        <h1 className='text-[#09051C] font-montserrat text-[15px] font-semibold leading-[19.65px] text-left ml-8'>Location</h1>
        </div>
        <ul className='list-none flex flex-row flex-wrap'>
          {
            LocationList.map((each)=>(
                <LocationItem content={each} key={each.id}/>
            ))
          }
        </ul>
        <div className='w-[100%] mt-8 '>
        <h1 className='text-[#09051C] font-montserrat text-[15px] font-semibold leading-[19.65px] text-left ml-8'>Food</h1>
        </div>
        <ul className='list-none flex flex-row flex-wrap'>
          {
            FoodList.map((each)=>(
                <LocationItem content={each} key={each.id}/>
            ))
          }
        </ul>
        <div className="text-center mt-24 flex justify-center items-center">
            <button className=' w-80 h-16 mb-4 rounded-3xl font-montserrat text-[14px] font-semibold leading-[40.96px]  text-[#ffffff] bg-[#B2AC88]'>Search</button>
         </div>
      </div>
    )
  }

export default Filter



export const TypeItem=(prop)=>{
    const {content}=prop
    return (
        <li className='text-black flex justify-center relative rounded-xl m-2 opacity-30 items-center h-11 min-w-10 left-6 w-auto p-2  bg-[#FEAD1D]  '>
         <p className='font-montserrat text-[12px] font-[500] leading-[14.63px] tracking-[0.43px] text-left text-black'>{content.tittle}</p>
        </li>
    )
}

export const LocationItem=(prop)=>{
    const {content}=prop
    return (
        <li className='text-black flex justify-center relative rounded-xl m-2 opacity-30 items-center h-11 min-w-10 left-6 w-auto p-2 bg-[#B2AC88]'>
         <p className='font-montserrat text-[12px] font-[500] leading-[14.63px] tracking-[0.43px] text-left text-black'>{content.tittle}</p>
        </li>
    )
}