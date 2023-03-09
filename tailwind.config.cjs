/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-ping": "ping 1s cubic-bezier(0, 0, 0.2, 1) ",
        bounceDefault: "  bounce 1.5s infinite;",
        wiggle: "wiggle 2s linear infinite",
      },

      fontFamily: {
        pinar: ["pinards1fan", "sans-serif"],
        cursive: ["cursive"],
      },

      keyframes: {
        bounceDefault: {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },

        gridTemplateColumns: {
          // Simple 16 column grid
          5: "repeat(5, minmax(0, 1fr))",
        },

        wiggle: {
          "0% , 50%": { transform: "translateX(-60px)" },
          "100%": { transform: "translateX(10px)" },
        },
      },

      backgroundImage: {
        "footer-pattern": "url('./src/assets/img/footer.png')",
        Overlay:
          "linear-gradient(180deg, #eaf2f4 0.9554140127388535%, rgba(255, 255, 255, 0) 100%)",
        Overlay2: "url('./src/assets/img/bgOverlay.png')",
        CourseEllipse1: "url('./src/assets/img/Ellipse121.png')",
        CourseEllipse2: "url('./src/assets/img/Ellipse122.png')",
        holderImg: "linear-gradient(180deg,rgba(255,255,255,0) 45%,#fff 100%)",
        holderImgdark:
          "linear-gradient(180deg,rgba(255,255,255,0) 45%,#3f3f3f 100%)",
        asideBackground: "url('./src/assets/img/pptn.png')",
        "bg-boxed-red": "url('./src/assets/img/bg-boxed-red.jpg')",
        coverCustemer: "url('./src/assets/img/coverCustomer.png')",
        coverAbout: "url('./src/assets/img/maskAbout.svg')",
      },
      width: {
        80: "80px",
        100: "100px",
        150: "150px",
        200: "200px",
        225: "225px",
        250: "250px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        400: "400px",
        450: "450px",
        500: "500px",
        550: "550px",
        600: "600px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        50: "50px",
        80: "80px",
        100: "100px",
        150: "150px",
        200: "200px",
        225: "225px",
        250: "250px",
        300: "300px",
        350: "350px",
        340: "340px",
        370: "370px",
        420: "420px",
        400: "400px",
        450: "450px",
        550: "550px",
        500: "500px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      screens: {
        xs: "320px",
        sm: "468px",
        md: "768px",
        mdg: "992px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        primary: "#F1891E", // orange
        primaryOverlay: "#FFEFDE", // primary 2

        secondary: "#621EF1", // purple
        secondaryOverlay: "#ece5fa", // purple
        headingColor: "#5f6b7c", //black #181b31
        disable: "#D9D9D9", // disable
        disableOverlay: "#9B9B9B", // disable 2
        disableOverlay2: "#F4F4F4", // disable 3
        disableUnique: "#b9b8b8", // disable 3
        cardOverlay: "rgba(241,137,30,0.3)",
        "purple-1000": "#646fa7",
      },
      borderRadius: {
        primary: "25px",
        secondary: "15px",
      },
      boxShadow: {
        default: "0px 8px 50px 0px rgba(0,0,0,0.1)",
        circleProfile: "0px 7px 50px rgb(252,223,230,70%) ",
        primary2: "0px 4px 12px rgba(126,87,194,16%)",
      },

      content: {
        sparkles: "url('./src/assets/img/Sparkles.png')",
        circleSmall: "url('./src/assets/img/circlesSmall.png')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
