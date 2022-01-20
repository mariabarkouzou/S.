module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'white': "#ffffff",
      'black': "#000000",
      'yellow': "#B4FF00",
      'blue': "#4B00FF",
      'gray':{
        100:"#CFCFCF",
        200:"#858585",
      },
    },
    fontSize: {
      'base': '1rem', //18px
      'sm': '0.875rem',//16px
      'lg': '1.125rem',//24px
      'xl': '2.375rem',//38px
     
    },
    fontWeight: {
      'normal':  '400',
      'medium': '500',
      'extra-bold': '800',
    },
    extend: {},
  },
  plugins: [],
};
