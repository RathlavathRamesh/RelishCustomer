import React from 'react';
import OtpInput from './OtpInput';

const OtpContainer = () => {
  const handleOtpComplete = (otp) => {
    console.log('OTP Complete:', otp);
    // Add validation or further processing here
  };

  return (
    <div
      className="
        w-auto min-w-[90%] h-[103px] text-[#09051C] absolute top-60 left-6 gap-1
        rounded-xl  shadow-custom bg-white flex items-center justify-center
      "
    >
      <OtpInput length={4} onComplete={handleOtpComplete} />
    </div>
  );
};

export default OtpContainer;
