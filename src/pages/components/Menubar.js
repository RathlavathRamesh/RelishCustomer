import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Menubar = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('/');

  return (
    <nav className="fixed left-1 right-1 bottom-2 rounded-3xl w-[100%] shadow-2xl h-[74px] bg-[#FFFFFF] text-black flex justify-around items-center border border-white">
      <Link href="/">
        <div className='flex h-11 bg-lightgreen w-16 rounded-[12px] items-center'>
          <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715918995/Home_xh4bal.png' alt='HomeIcon' className='h-6 w-6'/>
          <p className='text-[#09051C] w-10 h-4  font-montserrat text-[12px] font-semibold pl-1 pt-0.5 leading-[15.72px] text-left'>Home</p>
        </div>
      </Link>
      <Link href="/profile" >
        <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715919991/Icon_Profile_eftuzp.png' alt='profile' className='h-5 w-4'/>
      </Link>
      <Link href="/cart" >
       <div className='h-6 w-7' 
       style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715920162/Buy_ppoooz.png')", opacity:"15"}} >
         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715920219/Notification_Cart_o7i1ph.png' alt='Notification' className='h-3 w-3 ml-4'/>
       </div>
      </Link>
      <Link href="/Message">
      <div className='h-6 w-7' 
       style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715920379/Chat_eb1u6j.png')", opacity:"15"}} >
         <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715920411/Ellipse_164_csxkvc.png' alt='Notification' className='h-3 w-3 ml-4'/>
       </div>
      </Link>
    </nav>
  );
};

export default Menubar;
