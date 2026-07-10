// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import site from "./src/data/site";
const { canonicalURL } = site;

// https://astro.build/config
export default defineConfig({
	site: canonicalURL,
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": "/src",
				"@public": "/public",
				"/src": "/src",
				"/public": "/public",
			},
		},
	},
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => {
				return !page.endsWith("/post/") && !page.includes("/blog/");
			},
			changefreq: "weekly",
			lastmod: new Date(),
			customSitemaps: [`${canonicalURL}/rss.xml`],
		}),
	],
});
