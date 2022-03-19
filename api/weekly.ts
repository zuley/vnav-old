import urlConfig from "~~/config/url.config";
import { ResData } from "./api";

type Article = {
  link: string
  recommend: string
  source: string
  title: string
  _createTime: number
  _id: string
}
type Weekly = {
  thumb: string
  title: string
  _createTime: number
  _id: string
  articles: Article[]
}
export async function getWeeklyList () {
  return await useAsyncData<ResData<Weekly>>('weekly', () => $fetch(urlConfig.weekly.list, {
    params: {
      limit: 10
    }
  }))
}