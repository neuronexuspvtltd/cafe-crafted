/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00563D',
          darkgreen: '#073D2E',
          cream: '#F5F0E7',
          ivory: '#FCFAF4',
          espresso: '#3A2922',
          tan: '#B98B62',
          clay: '#A9674D',
          lightcream: '#FAF6F0',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        accent: ['"Caveat"', 'cursive'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(58, 41, 34, 0.08)',
        'card': '0 10px 30px -5px rgba(7, 61, 46, 0.06)',
      }
    },
  },
  plugins: [],
}
