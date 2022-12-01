/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        abi: "linear-gradient(319.4deg, #0898E7 5.17%, rgba(8, 152, 231, 0.5) 94.34%)",
      },
      fontFamily: {
        IRANSans: "IRANSansXFaNum",
        Hekayat: "Hekayat",
      },
      width: {
        18: "72px",
        82.5: "330px",
      },
      colors: {
        navyBlue: "#02073E",
        navyBluee: "#0F2137",
        abiStroke: "#56CCF2",
        abi: "#0898E7",
      },
      fontSize: {
        xxs: "10px",
      },
      spacing: {
        width: {
          18: "72px",
          82.5: "330px",
        },
        height: {
          18: "72px",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
