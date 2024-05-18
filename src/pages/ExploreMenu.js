import React from 'react'
import Menubar from './components/Menubar'

const PopularMenuList=[{id:1,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1715964366/image_1_cztqk6.png',name:'Laura Latte',cost:'₹ 249'},{id:2,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1715964540/image_1_1_sgxjbp.png',name:'Syafiqs Kimchi Toastie',cost:'₹ 249'}];
const PopularList=[{id:1,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716002105/image_2_l4sia9.png',name:'Chia Pot with Berry Compote (VE) ',cost:'₹ 249'},{id:2,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716002144/image_1_2_xhe7hc.png',name:'Matcha Yoghurt Bowl (VE)',cost:'₹ 249'}];


const ExploreMenu = () => {
  return (
    <div className='min-h-screen  h-auto opacity-10 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"10"}}>
      <Menubar/>
        <div className='flex justify-around mt-12'>
            <h1 className='h-20 w-48  text-[#09051C]  text-[31px] font-semibold  leading-[40.62px] text-left'>Biryani By Kilo</h1>
            <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715939453/Restaurant_Image_ichogd.png' alt='BiryaniImage' className='relative h-20 w-20'/>
          </div>
          <h1 className='text-[#09051C] h-5 w-12 left-8 absolute  text-[15px] leading-6 font-montserrat font-semibold'>Outlet</h1>
          <p className='text-[#09051C] leading-4 absolute text-[12px] font-[400] underline mt-1 left-24'>Miramar</p>
      <div className='flex mt-6  justify-around'>
        <div className='w-72 h-12 bg-[#f2ebbf] ml-8 mt-6 opacity-30 shadow-xl flex flex-row rounded-[15px]'>
         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715922443/Icon_Search_uxt5zj.png' alt='searchIcon' className='h-6 ml-2 w-6 mt-3'/>
         <input type='text' placeholder='What do you want to order?' className='absolute outline-none text-[#B2AC88] font-montserrat text-[12px] font-normal leading-[14.63px] tracking-[0.5px] text-left bg-[#f2ebbf] left-16 h-12 w-52'/>
        </div>
        <div className='flex justify-center items-center mt-6 left-72 mr-4 ml-4 shadow-2xl bg-[#f2ebbf] w-12 opacity-30 rounded-2xl h-12 top-44'>
          <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715957830/Vector_1_rxeqq5.png' alt='filterIcon' className='h-4 w-4' />
        </div>
      </div>
     <div className='w-[100%] mt-8 '>
      <h1 className='text-[#09051C] font-montserrat text-[15px] font-bold leading-[19.65px] text-left ml-8'>Popular Menu</h1>
     </div>
     <ul className='list-none flex flex-wrap justify-center'>
        {
          PopularMenuList.map((each)=>(
            <PopulaMenuItemCart item={each} key={each.id}/>
          ))
        }
     </ul>
     <hr className='border border-solid border-black/50 w-80 h-[1px] ml-7 mt-4 right-5'/>
     <div className='w-[100%] mt-8 '>
      <h1 className='text-[#09051C] font-montserrat text-[15px] font-bold leading-[19.65px] text-left ml-8'>Breakfast Pots</h1>
     </div>
     <ul className='list-none flex flex-wrap justify-center'>
        {
          PopularList.map((each)=>(
            <PopulaMenuItemCart item={each} key={each.id}/>
          ))
        }
     </ul>
    </div>
  )
}

export default ExploreMenu


export const PopulaMenuItemCart=(props)=>{
  const {item}=props;
  console.log(item)
  return (
    <li className='min-h-52 h-auto text-black w-40 m-2 bg-[#FFFFFF] shadow-2xl rounded-lg'>
       <div className='h-40 w-40 bg-cover flex flex-row pl-32 ' style={{ backgroundImage:`url(${item.imageUrl})` }}>
          <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715965291/Add_cbq60c.png' alt='PlusIcon' className='self-end rounded-md mr-4 mb-4 h-7 w-7'/>
       </div>
       <h1 className='text-[#000000]  pl-2 font-montserrat text-[10px] min-w-12 font-semibold w-auto h-4 leading-6'>{item.name}</h1>
       <h1 className='text-[#000000]  pl-2 font-montserrat min-w-12 text-[10px] font-semibold w-auto h-4 leading-6'>{item.cost}</h1>
    </li>
  )
}