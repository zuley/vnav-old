import URL from '~/config/url.config'
import { ResData, ReqData } from './api.d'

export type Classify = {
  name: string
  desc: string
  icon: string
  slug: string
  _id: string
}

export async function getClassify () {
  return await useAsyncData<ResData<Classify>>('getClassify', () => $fetch(URL.nav.classify, ReqData))
}