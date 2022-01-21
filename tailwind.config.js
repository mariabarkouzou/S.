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
      'xsm': '0.75rem',//12px
      'sm': '0.875rem',//14px
      'base': '1rem', //16px
      'middle': '1.125rem',//18px
      'normal': '1.375rem', //22px
      'lg': '1.5rem',//24px
      'blg': '1.75rem', //28px
      'sxl': '2rem', //32px
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
