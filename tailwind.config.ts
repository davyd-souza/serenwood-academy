import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        root: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content',
      },
      minHeight: {
        'screen-d': '100dvh',
      },
    },
  },
  plugins: [],
}
export default config
