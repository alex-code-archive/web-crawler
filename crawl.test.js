import { normalizeURL } from './crawl.js'
import { test, expect } from '@jest/globals'

test('normalized url is equivalent', () => {
  const baseURL = 'blog.boot.dev/path'
  const urlsToTest = [
    'https://blog.boot.dev/path/',
    'https://blog.boot.dev/path',
    'http://blog.boot.dev/path/',
    'http://blog.boot.dev/path'
  ]
  for(let url of urlsToTest) {
    const normalizedURL = normalizeURL(url)
    expect(normalizedURL).toBe(baseURL)
  }
})
