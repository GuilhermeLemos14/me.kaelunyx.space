// src/data/site.ts
export interface SiteData {
	title: string;
	description: string;
	author: string;
	twitterHandle: string;
	dateCreated: string;
	locale: string;
	canonicalURL: string;
}

const site: SiteData = {
	title: "Kaelunyx Blog",
	description: "",
	author: "Guilherme Lemos",
	twitterHandle: "@Kaelunyx",
	dateCreated: "2026-01-12T00:00:00-03:00",
	locale: "en_CA",
	canonicalURL: "https://blog.kaelunyx.space",
};

export default site;
