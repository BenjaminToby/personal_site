module.exports = {
    content: ["./components/**/*.{html,js,jsx}", "./pages/**/*.{jsx,tsx}", "./app/**/*.{html,js,jsx,tsx}", "./layouts/**/*.{jsx,tsx}"],
    theme: {
        screens: {
            xs: "350px",
            sm: "450px",
            md: "600px",
            sl: "800px",
            lg: "976px",
            xl: "1200px",
        },
        colors: {
            primary: "#7174ff",
            primary_light: "#9d9eff",
            primary_dark: "#7072c9",
        },
        fontFamily: {
            sans: ["Graphik", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        // extend: {
        //     spacing: {
        //         128: "32rem",
        //         144: "36rem",
        //     },
        //     borderRadius: {
        //         "4xl": "2rem",
        //     },
        // },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
