const { url } = require("inspector");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        screens: {
            vs: "320px",

            vm: "370px",

            sm: "640px",

            md: "768px",

            lg: "1024px",

            xl: "1280px",

            "2xl": "1536px",
        },
        extend: {
            boxShadow: {
                boxFull: "0 0 10px 2px #33343E ",
                boxFull_2: "0 0 10px 2px #202225 ",
            },
            backgroundImage: {
                HomePageBG:
                    "url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')",
            },
        },
    },
    plugins: [require("daisyui")],
};
