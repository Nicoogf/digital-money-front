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
      screens: {
        'sm': '320px',  // SE // S8+ // 
        'md': '380px',  // XR // 12PRO // 14PRO Max // Pixel 7 // S20 ULTRA //Surface Duo // A51
        'lg': '678px', // Ipad mini // Ipad Air // Surface Pro 7
        'xl': '1024px', // IpadPro // Nest Hub
        'xxl': '1280px', //Next hub MAX
        'xxxl': '1440px', // pC HD
    },
    colors: {
     
      'lemon': '#C1FD35', // Reemplaza '#abcdef' con tu código de color deseado      
      },
  },
  plugins: [],
},
}
