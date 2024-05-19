import React from 'react'
import NotificationCard from './components/NotificationCard';

const NotificationList=[{id:1,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716137894/Success_Icon_f2nqzo.png',status:'Your order has been taken by the driver',time:'Recently'},{id:2,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716139852/Top_Up_Icon_cjow3v.png',status:'Topup for $100 was successful',time:'10.00 Am'},{id:3,imageUrl:'https://res.cloudinary.com/dnovcmruv/image/upload/v1716139934/Cancel_Icon_fcgpyl.png',status:'Your order has been canceled',time:'22 Juny 2021'}];
const Notification = () => {
    return (
        <div className='min-h-screen h-auto opacity-5  w-[100%]   bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}} >
            {/* <Menubar/> */}
           <div className='h-8 w-8 bg-[#F2F1E6] top-10 absolute  left-[1.5rem] flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-64 h-16 text-[#09051C] absolute top-10 left-6 font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
               Notification
             </h1>
           </div>
           <ul className='list-none flex flex-col justify-center pt-40 items-center '>
                {
                    NotificationList.map((each)=>(
                        <NotificationCard Item={each} key={each.id}/>
                    ))
                } 
             </ul>
        </div>
  )
}

export default Notification
