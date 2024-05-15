import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from 'next/router';

export default function Home() {
   
  const router=useRouter();
    useEffect(()=>{
         router.replace("/OnboardingHome")
        console.log("Hii Ramesh")
    },[])

  return (
    <main
    className="h-auto min-h-[100vh] bg-[#FFFFFF] flex  justify-center items-center text-red-700 bg-cover"
    style={{ backgroundImage: "url('https://res.cloudinary.com/dnovcmruv/image/upload/v1715617620/Pattern_1_v6q46x.png')" }}
  >
  <Image src="https://res.cloudinary.com/dnovcmruv/image/upload/v1715619648/image_45_wlwmrr.png" alt="Description of the image" width={182} height={192} />
  </main>
  );
}
