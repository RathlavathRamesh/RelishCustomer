import React from 'react'

const CallRinging = () => {
    return (
        <div className='min-h-screen h-auto w-[100%] flex justify-center items-center  bg-cover  bg-[#FEFEFF]'
            style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}} >
              <div className='text-black flex flex-col items-center'>
                 <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716090137/Image_1_dqxh55.png' alt='ProfileImage' className='h-40 w-40 '/>
                 <h1 className='h-8 w-56 text-center text-[#09051C] font-montserrat text-[25px] font-semibold mt-2 leading-[32.76px] opacity-80'>Courtney Henry</h1>
                 <p className='w-28 h-3 text-[#3B3B3B] font-montserrat text-[19px] font-medium leading-[23.16px] tracking-[0.5px] text-center opacity-40 mt-2'>Ringing . . .</p>
              </div>
            <div className='fixed bottom-16 flex items-center '>
              <div className='h-20 w-20 flex justify-center items-center'
              style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1716088975/Ellipse_208_f7ksdq.png')", opacity:"15"}} >
                <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716089058/Volume_Up_v8ani0.png' alt='VolumeIcon' className='h-5 w-5'/>
              </div>
              <div className='h-20 w-20 flex justify-center items-center bg-cover ml-2'
              style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1716089677/Ellipse_207_gak5qk.png')", opacity:"15"}} >
                <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716089750/Group_764_h6sjob.png' alt='VolumeIcon' className='h-5 w-5'/>
              </div>
            </div>
        </div>
      )
}

export default CallRinging
