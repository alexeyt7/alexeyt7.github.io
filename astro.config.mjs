// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://alexeyt7.github.io',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Inter',
			cssVariable: '--font-sans',
			fallbacks: ['sans-serif'],
			weights: ["100 900"]
		},
		{
			provider: fontProviders.google(),
			name: 'Fira Sans',
			cssVariable: '--font-sans-2',
			fallbacks: ['sans-serif'],
			weights: ["100 900"]
		},
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-mono',
			fallbacks: ['monospace'],
			weights: ["100 800"]
		}
	],
	image: {
		layout: 'constrained',
		responsiveStyles: true
	}
});
