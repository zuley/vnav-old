import { Directus } from '@directus/sdk';
import baseConfig from '~~/config/base.config';

export type Setting = {
  id: number
  name: string
  code: string
  value: string
  value_pic: string
}

export type Menu = {
  id: number
  sort: number
  name: string
  url: string
  target: boolean
  parent: number
}

export type Classify = {
  id: number
  sort: number
  name: string
  desc: string
  icon: string
  slug: string
}

export type Nav = {
  id: number
  sort: number
  name: string
  url: string
  icon: string
  desc: string
  classify: number
}

export type Article_post = {
  id: number
  title: string
  source: string
  recommend: string
  url: string
  tags: any
}

export type Page = {
  id: number
  title: string
  desc: string
  content: string
  date_created: string
  slug: string
}

export type Weekly = {
  id: number
  title: string
  pic: string
  articles: Article_post[]
}

type MyCollections = {
	classify: Classify
  nav: Nav
  setting: Setting
  menu: Menu,
  article_post: Article_post
  page: Page
  weekly: Weekly
};
const host = baseConfig.cmsURL
const directus = new Directus<MyCollections>(baseConfig.cmsURL);
export default directus

export const useClassify = () => directus.items('classify')
export const useNav = () => directus.items('nav')
export const useSetting = () => directus.items('setting')
export const useMenu = () => directus.items('menu')
export const useArticle_post = () => directus.items('article_post')
export const usePage = () => directus.items('page')
export const useWeekly = () => directus.items('weekly')

export const useFileHost = () => host + '/assets/'

type ThumbnailOption = {
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
  width?: number
  height?: number
  quality?: number
  withoutEnlargement?: boolean
  format?: 'jpg' | 'png' | 'webp' | 'tiff'
}
export function useThumbnail (id: string, opt: ThumbnailOption = {}) {
  const queryStr = Object.entries(opt).reduce((all, item) => {
    return all += item[0] + '=' + item[1] + '&'
  }, "?")
  return useFileHost() + id + queryStr
}