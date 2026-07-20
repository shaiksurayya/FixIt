/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        sub: '#64748B',
        primary: '#2563EB',
        primaryDark: '#1D4ED8',
        primaryLight: '#EEF4FF',
        amber: '#F59E0B',
        line: '#E2E8F0',
        surface: '#F8FAFC',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
