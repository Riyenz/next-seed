module.exports = {
  mode: 'jit',
  content: [
    './layouts/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', 'sans-serif'],
      ssp: ['"Source Sans Pro"', 'sans-serif'],
      scp: ['"Source Code Pro"', 'sans-serif'],
      so: ['"Squada One"', 'sans-serif'],
      ds: ['"DM Sans"', 'sans-serif'],
      poppins: ['"Poppins"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#5f50e6',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
