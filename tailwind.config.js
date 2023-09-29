/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'satoshi': "satoshi"
      },
      keyframes: {
        buttonReveal: {
          '0%': { transform: 'scaleY(50%) translateY(-20%)', color: "transparent" , "border-color": "transparent"},
          '50%': { "border-color": "transparent"},
          '100%': { transform: 'scaleY(100%) translateY(0)', color: "white" , "border-color": "white"},
        }
        // buttonHide: {
        //   '0%': { transform: 'scaleY(100%) translateY(0)', color: "white" , "border-color": "white"},
        //   '50%': { "border-color": "transparent"},
        //   '100%': { transform: 'scaleY(50%) translateY(-20%)', color: "transparent" , "border-color": "transparent"},
        // }
      },
      animation: {
        buttonReveal: 'buttonReveal 300ms ease-in-out'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("@thoughtbot/tailwindcss-aria-attributes")
  ],
}
