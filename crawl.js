import { JSDOM } from "jsdom";
function normalizeURL(url) {
  const urlObj = new URL(url);
  const hostname = urlObj.hostname;
  let pathname = urlObj.pathname;
  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }
  return `${hostname}${pathname}`;
}

function getURLsFromHTML(htmlBody, baseURL) {
  const dom = new JSDOM(htmlBody);
  const links = dom.window.document.querySelectorAll("a");
  const urls = []
  for (let link of links) {
    console.log(link.href + link.hostname);
    if (link.hostname === baseURL) {
      urls.push(link.href)
    } else {
      urls.push(`${link.hostname}`)
    }
  }
}
getURLsFromHTML(
  '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>',
);
normalizeURL("https://www.blog.boot.dev/path/to/blog/");

export { normalizeURL, getURLsFromHTML };
