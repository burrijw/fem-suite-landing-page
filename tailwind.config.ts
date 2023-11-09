import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#hsl(30, 29%, 97%)",
            blue: "hsl(221, 36%, 16%)",
            gray: "hsl(221, 17%, 36%)",
            purple: "hsl(261, 89%, 68%)",
            pink: "hsl(288, 69%, 55%)",
            beige: "hsl(30, 28%, 93%)",
            yellow: "hsl(31, 85%, 66%)",
        },
        fontFamily: {
            sans: "var(--font-epilogue)",
        },
        fontSize: {
            caption: [
                ".9375rem",
                {
                    fontWeight: "400",
                    lineHeight: "2.14",
                },
            ],
            body: ["1.125rem", { lineHeight: "2.14", fontWeight: "400" }],
            quote: ["1.25rem", { lineHeight: "1.75", fontWeight: "400" }],
            "heading-sm": ["1rem", { lineHeight: "1.625", fontWeight: "400" }],
            "heading-md": [
                "1.125rem",
                {
                    lineHeight: "1.78",
                    fontWeight: "700",
                    letterSpacing: "-0.2px",
                },
            ],
            "heading-lg": [
                "3rem",
                {
                    lineHeight: "1.167",
                    fontWeight: "700",
                    letterSpacing: "-0.5px",
                },
            ],
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
