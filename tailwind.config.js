/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      'heroBG': "url('https://res.cloudinary.com/ddpzz4n4i/image/upload/v1720701799/Banner_Image_1_ek950f.png')",
      'serviceBG':"url('https://res.cloudinary.com/dzmhkzava/image/upload/v1721159238/Image1_unftbd.png')",
      'serviceOne' : "url('src/assets/img/s1Img.png')",
      'serviceTwo' : "url('src/assets/img/s2Img.png')",
      'serviceThree' : "url('src/assets/img/s4Img.png')",
      'aboutBG' : "url('https://res.cloudinary.com/dnxovvjcz/image/upload/v1721141133/Image_1_ukiuqb.png')"
      },

      fontFamily:{
        'mainFont' : ["Cabin", 'sans-serif']
      },
      colors:{
        'color1' : "#595566",
        'color2' : "#1F274F",
        'color3' : "#FFCC4A",
        'color4' : "#F5F5F5",
        'color5' : "#EBEBEB",
        'color6' : "#02B1F0"
      }
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}