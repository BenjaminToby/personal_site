module.exports = {
    content: ["./components/**/*.{html,js,jsx}", "./pages/**/*.jsx", , "./layouts/**/*.jsx"],
    theme: {
        screens: {
            xs: "350px",
            sm: "450px",
            md: "600px",
            sl: "800px",
            lg: "976px",
            xl: "1200px",
        },
        // colors: {},
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
