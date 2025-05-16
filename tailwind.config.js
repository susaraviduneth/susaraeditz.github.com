/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        gaming: {
          primary: '#6C2BD9',
          secondary: '#FF3366',
          accent: '#00F0FF',
          dark: '#1A1A2E',
          light: '#E5E5E5'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }
    },
  },
  plugins: [],
};