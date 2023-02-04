import { SitemapIndexStream } from 'sitemap'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const smStream = new SitemapIndexStream({
    xslUrl: `${config.siteBase}/sitemap-index.xsl`
  })

  smStream.write({ url: `${config.siteBase}/sitemap-classify.xml` })

  smStream.end()
  return smStream
})