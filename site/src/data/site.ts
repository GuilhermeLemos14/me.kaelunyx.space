// src/data/site.ts
export interface SiteData {
	name: string;
	author: string;
	twitterHandle: string;
	dateCreated: string;
	locale: string;
	canonicalURL: string;
}

const site: SiteData = {
	name: "Kaelunyx Space",
	author: "Mikaël Bélanger",
	twitterHandle: "@Kaelunyx",
	dateCreated: "2026-01-12T00:00:00-03:00",
	locale: "en_CA",
	canonicalURL: "https://kaelunyx.space",
};

export default site;
