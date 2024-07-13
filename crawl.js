function normalizeURL(url) {
  const urlObj = new URL(url)
  const hostname = urlObj.hostname
  let pathname = urlObj.pathname
  if (pathname.endsWith('/')){
    pathname = pathname.slice(0, -1)
  }
  return `${hostname}${pathname}`

}

normalizeURL('https://www.blog.boot.dev/path/to/blog/')


export { normalizeURL }
