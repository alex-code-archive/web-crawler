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
  const urls = [];
  for (let link of links) {
    if (link.hasAttribute("href")) {
      let href = link.getAttribute("href");
      try {
        href = new URL(href, baseURL).href;
        urls.push(href);
      } catch (err) {
        console.log(`${err.message}: ${href}`);
      }
    }
  }
  return urls;
}

function crawlPage(baseURL) {
  try {
    const res = fetch(baseURL);
    if (res.status >= 400) {
      console.log(`Error with status code ${res.status}`);
      return;
    }
    if (res.headers.get("content-type" !== "text/html")) {
      console.log("Content type is not text/html.");
      return;
    }
    console.log(res.text());
  } catch (err) {
    console.log(err.message);
  }
}
// getURLsFromHTML(
//   '<html><body><a href="/path/one"><span>Boot.dev></span></a><a href="https://other.com/path/one"><span>Boot.dev></span></a></body></html>',
// );
// normalizeURL("https://www.blog.boot.dev/path/to/blog/");

export { normalizeURL, getURLsFromHTML, crawlPage };
