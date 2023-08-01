/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    color: {
      title: '#343A40',
      tableText: '#6C757D',
      current: 'currentColor',
      primary: '#11224B'
    }
  },
  plugins: [],
}
