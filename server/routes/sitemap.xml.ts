import cms from "../utils/cms"
import { SitemapStream } from 'sitemap'

export default defineEventHandler(async (event) => {
  event.node.res.setHeader('Content-Type', 'application/xml')
  const classify = cms.items('classify')
  const smStream = new SitemapStream({ hostname: 'http://vnav.link/' })
  
  const { data: classifyList } = await classify.readByQuery()

  classifyList?.forEach(el => {
    smStream.write({ url: `/classify/${el.slug}` })
  })

  smStream.end()
  return smStream
})