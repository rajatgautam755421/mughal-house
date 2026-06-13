// Twitter uses the same 1200×630 share card as Open Graph. Re-export
// the OG image route so Twitter's crawler picks it up at /twitter-image.
export { default, size, contentType, alt } from "./opengraph-image";
