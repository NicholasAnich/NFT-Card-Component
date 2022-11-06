/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [require("prettier-plugin-tailwindcss")],
    content: ["./index.html"],
    theme: {
        fontFamily: {
            sans: ["Outfit", "sans-serif"],
        },
        extend: {},
        colors: {
            softBlue: "#8BACD9",
            white: "#FFFFFF",
            cyan: "#00FFF8",
            mainBg: "#0D192C",
            cardBg: "#15263F",
            blueLine: "#2E405A",
        },
        fontSize: {
            para: "1.125rem",
            title: "1.375rem",
        },
    },
    plugins: [],
};
