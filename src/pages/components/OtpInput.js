import React, { useState, useRef } from 'react';

const OtpInput = ({ length = 4, onComplete }) => {
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    if (newOtp.every(val => val !== '')) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex space-x-3 justify-center">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={e => handleChange(e, index)}
          onKeyDown={e => handleKeyDown(e, index)}
          ref={el => (inputs.current[index] = el)}
          className="w-12 h-12 text-[Montserrat] rounded-lg text-center text-xl focus:outline-none"
        />
      ))}
    </div>
  );
};

// className="w-12 h-12 border-2 border-gray-300 rounded-lg text-center text-xl focus:outline-none focus:border-blue-500"

export default OtpInput;
