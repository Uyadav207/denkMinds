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
        'media-gradient': 'radial-gradient(circle  at left center, rgba(30,1,40,1),  20%, rgba(0,0,0,1) 100%);',
        // 'background-home': 'linear-gradient(150deg, rgba(113,86,219,1) 0%, rgba(39,34,120,1) 23%, rgba(15,10,37,1) 53%, rgba(8,1,21,1) 100%)',
        'background-home': 'linear-gradient(150deg, rgba(113,86,219,1) 0%, rgba(39,34,120,1) 23%, rgba(15,10,37,1) 73%, rgba(85,13,45,1)100%)',

        'noise': "url('/noise.svg')",
      },
      backgroundSize: {
        'cover-cover': 'cover, cover',
      },
      backgroundBlendMode: {
        overlay: 'overlay',
      },
    },
  },
  plugins: [],
}
export default config
