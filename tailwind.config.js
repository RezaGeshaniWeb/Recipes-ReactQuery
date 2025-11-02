import { defineConfig } from "tailwindcss"

export default defineConfig({
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: "#723EFF",
            },
            boxShadow: {
                soft: "0 2px 8px rgba(0,0,0,0.05)",
            },
        },
    },
})
