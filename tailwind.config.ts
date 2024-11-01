import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        lg: "20px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'contactus-gradient': 'linear-gradient(230deg, #0d0221 0%, rgba(28, 23, 70, 1) 20%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%)',
        'media-gradient': 'radial-gradient(circle  at left center, rgba(30,1,40,1),  20%, rgba(0,0,0,1) 100%);'
      },
    },
  },
  plugins: [],
}
export default config
