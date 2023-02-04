import cms from "../utils/cms"
import { SitemapStream } from 'sitemap'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const classify = cms.items('classify')
  const smStream = new SitemapStream({
    hostname: config.siteBase,
    xslUrl: `${config.siteBase}/sitemap.xsl`
  })
  
  const { data: classifyList } = await classify.readByQuery()

  classifyList?.forEach(el => {
    smStream.write({
      url: `${config.siteBase}/classify/${el.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: '2022-01-01',
    })
  })

  smStream.end()
  return smStream
})