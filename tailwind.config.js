/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        resort: {
          950: '#111713',
          900: '#1B241E',
          800: '#26332B',
          700: '#34453A',
          600: '#485E50',
          100: '#E7ECE9',
          50: '#F4F7F5',
        },
        gold: {
          700: '#8C6D42',
          600: '#A68453',
          500: '#C2A374',
          400: '#D4B88E',
          100: '#F7F2EA',
          50: '#FAF8F4',
        },
        sand: {
          50: '#FAF8F5',
          100: '#F5F2EB',
          200: '#EBE6DC',
          300: '#DDD5C6',
          700: '#465049',
          800: '#2E3630',
          900: '#1D2420',
        },
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        script: ['var(--font-dancing)', 'cursive'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
