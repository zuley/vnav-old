export const useInitOptions = async () => {
  const setting = useSetting()
  const opt = await setting.getItems()
  return opt.map(el => {
    el.value = el.value || el.value_pic
    return el
  })
}
