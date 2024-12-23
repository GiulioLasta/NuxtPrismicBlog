/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/*.{js,vue,ts}",
    "./layouts/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./slices/**/*.vue",
    "./customTypes/**/*.{js,vue,ts}",
    "./app.vue",
    "./error.vue",
  ],
  

  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      }
    },
    screens: {

      'nav-sm': {
        'min': '0px',
        'max': '767px'
      },
      'nav-md': {
        'min': '767px',
        'max': '1280px'
      },
      'nav-xl': {
        'max': '1281px'
      },
  
      'too-small-min': {
        'min': '320px'
      },
      'too-small-max': {
        'max': '320px'
      },
      'ssm': {
        'min': '320px',
        'max': '500px'
      },
  
      'heading-md': {
        'min': '320px',
        'max': '767px'
      },
      'tile-sp': {
        'min': '0px',
        'max': '1024px'
      },
      'tile-bm': {
        'min': '500px',
        'max': '1024px'
      },
  
      'xs': '1px',
      'sm': '640px',
      'md': '767px',
      'screen-md': '767px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    // maxWidth: {
    //   '5xl': '64rem',  // 1024px
    // }

  },
  plugins: [],
}

