import proxyApi from "~~/server/utils/proxyApi"

export default defineEventHandler(async e => {
  const opts = await proxyApi(e, 'http://cms.zuley.xyz/juanwang/v1.0/setting/')
  if (opts) {
    opts.data = opts.data.map(item => {
      // 如果是图片类型，且只有一张图片，则直接转换为字符串
      if (item['value-pic'] && item['value-pic'].length === 1) {
        item['value-pic'] = item['value-pic'][0]
      }
      item.value = item.value || item['value-json'] || item['value-pic']
      return item
    })
  }
  return opts
})