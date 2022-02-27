import URL from '~/config/url.config'

export interface OptionData {
  _id: string
  code: string
  name: string
  value?: string
  'value-pic'?: string
  'value-json'?: string
}

export interface ResOptionData<T> {
  data: T[];
  total: number
}

const globalReqData = {
  params: {
    limit: 10
  }
}

export async function getMenus () {
  return await useFetch(URL.global.Menu, globalReqData)
}

export async function getOptions () {
  return await useAsyncData<ResOptionData<OptionData>>('global-options', () => $fetch(URL.global.options, globalReqData))
}