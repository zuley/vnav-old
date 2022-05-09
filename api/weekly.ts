import urlConfig from "~~/config/url.config";
import { ResData } from "./api";

type Article = {
  link: string
  recommend: string
  source: string
  title: string
  _createTime: number
  _id: string
  tags: string[]
}
type Weekly = {
  thumb: string
  title: string
  _createTime: number
  _id: string
  articles: Article[]
  desc: string
}
export async function getWeeklyList () {
  return await useAsyncData<ResData<Weekly>>('weekly', () => $fetch(urlConfig.weekly.list, {
    params: {
      limit: 10
    }
  }))
}

export async function getWeeklySingle (id: string) {
  return await useAsyncData<{ data: Weekly }>(`weekly-${id}`, () => $fetch(urlConfig.weekly.single + id))
}