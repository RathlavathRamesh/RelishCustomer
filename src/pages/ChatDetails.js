import React from 'react'

const MessageList=[{id:1,text:'Just to order',type:'Recive'},{id:2,text:'Okay, for what level of spiciness?',type:'send'},{id:3,text:'Okay, wait a minute 👍',type:'Recive'},{id:4,text:"Okay I'm waiting  👍",type:'send'}]
const ChatDetails = () => {
  return (
    <div className='min-h-screen h-auto absolute w-[100%]  bg-cover bg-[#FEFEFF]'
        style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')", opacity:"15"}} >
           <div className='h-8 w-8 bg-[#F2F1E6] top-10 absolute left-[1.5rem] flex justify-center items-center rounded-[10px] '>
             <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1715748776/Vector_j9krmr.png' alt='slicearrow' className='w-[2vw]'/>
             <h1 className="w-64 h-16 text-[#09051C] absolute top-10 left-6 font-montserrat text-[25px] font-bold leading-[32.76px] text-left">
                Chat
             </h1>
            </div>
          <div className='flex justify-center'>
           <div className='bg-[#FFFFFF] text-black mt-40 pl-2 h-20 w-80 flex justify-between rounded-2xl shadow-xl'>
            <div className='flex'>
                <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716020041/Photo_Profile_zh8jim.png' alt='ContactDetails' className='h-16 mt-2 ml-2 w-16'/>
                <div>
                <div>
                    <h1 className='font-montserrat text-[#09051C] text-[15px] ml-2 mt-3 font-semibold leading-[19.65px] text-left'>Dianne Russell</h1>
                    <div className='flex'>
                       <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716023533/Ellipse_184_pelpjy.png' alt='CallingIcon' className=' mt-2 ml-3 h-2 w-2'/>
                       <p className='text-[#3B3B3B] font-montserrat opacity-30 text-[14px] ml-2 mt-1 font-medium leading-[17.07px] tracking-[0.5px] text-left'>Online</p>
                    </div>
                </div>
                </div>
            </div>
            <div className='text-[#3B3B3B] bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center mt-4 mr-4 font-montserrat text-[14px]  opacity-50  font-medium leading-[17.07px] tracking-[0.5px] text-left'>
                <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716024051/Call_logo_hmdqnq.png' alt='callIcon' className='h-4 w-4'/>
            </div>
          </div>
          </div>
        <div className='bg-[#FFFFFF] text-black h-16 w-96 opacity-80 fixed bottom-2 flex justify-between items-center shadow-2xl rounded-2xl'>
         <input type='text' placeholder="Okay I'm waiting  👍" className='h-16 font-rubik font-400 leading-4 placeholder:text-[#181818] p-4 w-80 shadow-2xl opacity-80 rounded-2xl outline-none bg-[#FFFFFF]'/>
          <img src='https://res.cloudinary.com/dnovcmruv/image/upload/v1716026546/Icon_Send_yfnlmf.png' alt='sendIcon' className='h-6 w-6 mr-6' onClick={()=>console.log("Hii Ramesh")}/>
        </div>
        <ul className='list-none relative flex flex-col mt-8 ml-2'>
            {
               MessageList.map((each)=>(
                <MessageItem Item={each} key={each.id}/>
               )) 
            }
        </ul>
    </div>
  )
}

export default ChatDetails


export const MessageItem=({Item})=>{
    return (
        <li className={`inline-block opacity-80 relative ${Item.type === "send" ? 'bg-[#B2AC88] text-[#FFFFFF] text-[14px] self-end' : 'bg-gray-200 text-[#181818]'} p-2 m-2 h-auto w-auto font-montserrat font-[500] rounded-xl max-w-[50%] `}>
      {Item.text}
    </li>
    )
}