import type { Config } from 'tailwindcss'

import DaisyUI from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [DaisyUI],
} satisfies Config

