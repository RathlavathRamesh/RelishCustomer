import React, { useState } from 'react';
import RestaurentItem from './components/RestaurentItem';
import TestimonalCard from './components/TestimonalCard';

const PopularMenuList=[
    {id:1,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716478426/image_34_etfowr.png',name:'Spacy fresh crab',time:'12 $'},
    {id:2,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716478426/image_34_etfowr.png',name:'Spacy fresh crab',time:'16$'},
    {id:3,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716478426/image_34_etfowr.png',name:'Spacy fresh crab',time:'12 $'},
    {id:4,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716478426/image_34_etfowr.png',name:'Spacy fresh crab',time:'16$'}]
const TestiMonalsList=[
    {id:1,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716484444/Photo_Profile_3_cqm09q.png',name:'Dianne Russell',date:'12 April 2021',about:'This Is great, So delicious! You Must Here, With Your family . . '},
    {id:2,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716484444/Photo_Profile_3_cqm09q.png',name:'Dianne Russell',date:'12 April 2021',about:'This Is great, So delicious! You Must Here, With Your family . . '},
    {id:3,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716484444/Photo_Profile_3_cqm09q.png',name:'Dianne Russell',date:'12 April 2021',about:'This Is great, So delicious! You Must Here, With Your family . . '},
    {id:4,ImageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716484444/Photo_Profile_3_cqm09q.png',name:'Dianne Russell',date:'12 April 2021',about:'This Is great, So delicious! You Must Here, With Your family . . '},
]

const DetailProduct = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContainer = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="min-h-screen bg-cover bg-fixed"
      style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1716468732/Photo_Restaurant_yvmwuh.png')" }}>
      <div className="w-full h-[100vh] flex justify-center items-end ">
        <div
          className={`w-[376px] bg-[#FEFEFF] text-black rounded-t-[30px] overflow-y-auto transition-all duration-500 ${isExpanded ? 'h-[80vh]' : 'h-[30vh]'}`}>
            <div className='flex justify-center h-auto'>
                    <div className='bg-[#B2AC88] border-none rounded-full  fixed mt-4 w-[40px]'onClick={toggleContainer} >
                        <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716471123/Scrooll_Tools_qjqawi.png' alt='scrolleTool' className='h-2 w-[40px]' />
                    </div>
            </div>
            <div className='flex justify-between mt-2 p-2'>
                 <div className='bg-[#B2AC88] opacity-20 flex justify-center w-20 h-9 rounded-[19px] left-9 items-center'>
                 <p className='font-montserrat text-[12px]  font-bold leading-[15.72px]'>Popular</p>
                </div>
                 <div className='flex'>
                    <div className='flex justify-center items-center h-9 w-9'
                     style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1716472670/Rectangle_31_1_r2pc06.png')" }}>
                         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716472811/Shape_cu4qqg.png' alt=' Location' className='h-5 w-4'/>
                    </div>
                    <div className='flex justify-center items-center h-9 w-9'
                     style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1716473054/Rectangle_28_dzb9s3.png')" }}>
                         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716473143/heart_dkvrfb.png' alt=' Location' className='h-5 w-4'/>
                    </div>
                 </div>
            </div>
            <h1 className='text-[#09051C] font-montserrat text-[25px] mt-5 font-semibold leading-[15.72px] text-center '>Wijie Bar and Resto</h1>
            <div className='flex ml-4 mt-6'>
                  <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716474552/Icon_map-pin_sakgau.png' alt='location' className='h-5 w-5'/>
                  <p className='text-[#3B3B3B] opacity-30 mt-[2px] font-montserrat text-[14px] font-medium leading-[17.07px] tracking-[0.5px]'>19 Km</p>
                  <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716474772/Icon_Star_bmdfme.png' alt='location' className='h-5 w-5 ml-2'/>
                  <p className='text-[#3B3B3B] opacity-30 mt-[2px] font-montserrat text-[14px] font-medium leading-[17.07px] tracking-[0.5px]'>4,8 Rating</p>
            </div>
            <p className='text-[#000000] first-letter:font-montserrat text-[12px] font-medium m-4 leading-[21.66px] text-center'>Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole . . . .</p>
            <div className='w-[100%] mt-8 flex justify-between'>
                <h1 className='text-[#09051C] font-montserrat text-[15px] font-bold leading-[19.65px] text-left ml-6'>Popular Menu</h1>
                <p className='text-[#FF7C32] mr-6  font-montserrat h-4 w-16 text-[12px]'>View More</p>
            </div>
            <div className="overflow-x-auto whitespace-nowrap mb-5">
                <ul className="inline-flex list-none space-x-4">
                    {PopularMenuList.map((each) => (
                        <RestaurentItem cartItem={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <h1 className='text-[#09051C] font-montserrat bg-[] text-[15px] font-bold leading-[19.65px] text-left ml-6 mt-10'>Testimonials</h1>
           <ul className='list-none top-4 bg-[#FEFEFF]'>
             {
                TestiMonalsList.map((each)=>(
                    <TestimonalCard Item={each} key={each.id}/>
                ))
             } 
           </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;

