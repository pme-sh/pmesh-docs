import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			favicon: "/favicon.png",
			title: "pmesh",
			description: "pmesh is an all-in-one service manager, reverse proxy, and enterprise service bus",
			titleDelimiter: "|",
			logo: {
				src: "/src/assets/pmesh_label.png",
				alt: "pmesh",
				replacesTitle: true,
			},
			head: [
				{
					tag: "meta",
					attrs: { property: "og:image", content: "https://pme.sh/og.png" },
				},
				{
					tag: "meta",
					attrs: { property: "twitter:image", content: "https://pme.sh/og.png" },
				},
			],
			editLink: {
				baseUrl: "https://github.com/pme-sh/pmesh-docs",
			},
			social: {
				github: "https://github.com/pme-sh/pmesh",
			},
			customCss: ["./src/assets/landing.css"],
			sidebar: [
				{ label: "Getting started", link: "getting-started" },
				{
					label: "The Basics",
					autogenerate: { directory: "basics" },
				},
				{
					label: "Routing",
					autogenerate: { directory: "routing" },
				},
				{
					label: "Services",
					autogenerate: { directory: "services" },
				},
				{
					label: "Load Balancer",
					autogenerate: { directory: "lb" },
				},
				{
					label: "Runners (TBD)",
					autogenerate: { directory: "run" },
				},
				{
					label: "Runtime API (TBD)",
					autogenerate: { directory: "api" },
				},
				{
					label: "CI Internals (TBD)",
					autogenerate: { directory: "ci" },
				},
				{
					label: "Advanced Options (TBD)",
					autogenerate: { directory: "advanced" },
				},
			],
		}),
	],
});
