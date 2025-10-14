// @ts-check
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import readableClassnames from 'vite-plugin-readable-classnames'

export default defineConfig({
  site: 'https://teplostanski.me',
  integrations: [sitemap()],
  vite: { plugins: [readableClassnames({ lineNumber: true })] },
})
