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
export async function getArticleList () {
  return await useAsyncData<ResData<Article>>('article', () => $fetch(urlConfig.article.list, {
    params: {
      limit: 10
    }
  }))
}