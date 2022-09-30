export const useInitOptions = async () => {
  const setCms = useSetting()
  const res = await setCms.readByQuery({ limit: 20 })
  const opt = res.data
  return opt.map(el => {
    el.value = el.value || el.value_pic
    return el
  })
}
