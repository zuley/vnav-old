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
  return await useAsyncData<ResData<Classify>>('getClassify', () => $fetch(URL.nav.classify, {
    ...ReqData,
  }))
}

export async function getClassifyBySlug (slug: string) {
  return await useAsyncData<ResData<Classify>>(`getClassify-${slug}`, () => $fetch(URL.nav.getClassifyBySlug, {
    method: "POST",
    body: {
      query: {
        'slug': {
          '$eq': slug
        }
      }
    }
  }) )
}


type NavData = {
  _id: string
  url: string
  name: string
  icon: string
  desc: string
  classify: Classify
}
export async function getNav (classify: string) {
  return await useAsyncData<ResData<NavData>>(`getNav-${classify}`, () => $fetch(URL.nav.list, {
    method: "POST",
    body: {
      limit: 20,
      query: {
        "classify": {
          "$eq": classify
        }
      }
    },
    headers: {
      "Content-Type": "application/json",
    }
  }))
}