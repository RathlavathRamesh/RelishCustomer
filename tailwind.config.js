/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%)',
      },
      boxShadow: {
        'custom': '12px 26px 50px 0px #5A6CEA12',
      },
      boxShadow2: {
        'custom': '0px 0px 50px 0px rgba(90, 108, 234, 0.07)',
      },
      colors: {
        'custom-gray': '#F4F4F4',
      },
      fontFamily: {
        montserrat: ['Montserrat','sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
