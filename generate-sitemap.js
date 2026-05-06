import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'fs'

// Your site URL (must be live domain when deployed)
const hostname = 'https://scholed.app'

// List of routes you want in sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/nios', changefreq: 'weekly', priority: 0.9 },
  { url: '/degree', changefreq: 'weekly', priority: 0.9 },
  { url: '/admission', changefreq: 'weekly', priority: 0.8 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/terms-and-conditions', changefreq: 'monthly', priority: 0.5 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.5 },
]

const sitemap = new SitemapStream({ hostname })
const writeStream = createWriteStream('./dist/sitemap.xml')

// Write each page link
sitemap.pipe(writeStream)
links.forEach(link => sitemap.write(link))
sitemap.end()

writeStream.on('finish', () => {
  console.log('Sitemap generated successfully!')
})