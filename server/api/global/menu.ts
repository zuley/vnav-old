export default defineEventHandler(() => {
  return $fetch('http://cms.zuley.xyz/juanwang/v1.0/menu/', {
    params: {
      limit: 10
    }
  })
})