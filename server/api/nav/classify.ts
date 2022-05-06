import proxyApi from "~~/server/utils/proxyApi"

export default defineEventHandler(e => {
  return proxyApi(e, 'http://cms.zuley.xyz/juanwang/v1.0/classify/')
})