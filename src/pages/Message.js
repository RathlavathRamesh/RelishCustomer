import React from 'react'
import Menubar from './components/Menubar'
import ContactDetailsCard from './components/ContactDetailsCard';

const CustomersList=[{id:1,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716020041/Photo_Profile_zh8jim.png',name:'Anamwp',status:'Your Order Just Arrived!',time:'20:00'},{id:2,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716020070/Photo_Profile_1_kgf2g5.png',name:'Guy Hawkins',status:'Your Order Just Arrived!',time:'20:00'},{id:3,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716020100/Photo_Profile_2_dqzczl.png',name:'Leslie Alexander',status:'Your Order Just Arrived!',time:'20:00'}];
const Message = () => {
    return (
        <div className='min-h-screen h-auto opacity-5 absolute w-[100%]  bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}} >
            <Menubar/>
           <div className='h-8 w-8 bg-[#F2F1E6] top-10 absolute left-[1.5rem] flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-64 h-16 text-[#09051C] absolute top-10 left-6 font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
                Chat
             </h1>
            </div>
            <ul className='list-none mt-36 justify-center flex flex-wrap top-36'>
             {
                CustomersList.map((each)=>(
                    <ContactDetailsCard Item={each} key={each.id}/>
                ))
             } 
            </ul>
        </div>
  )
}

export default Message
