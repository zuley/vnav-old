import { DirectusItemRequest, DirectusQueryParams } from 'nuxt-directus/dist/runtime/types';
import baseConfig from '~~/config/base.config';

export type Setting = {
  id?: string | number
  name: string
  code: string
  value: string
  value_pic: string
}

export type Menu = {
  id?: string | number
  sort: number
  name: string
  url: string
  target: boolean
  parent: number
}

export type Classify = {
  id?: string | number
  sort: number
  name: string
  desc: string
  icon: string
  slug: string
}

export type Nav = {
  id?: string | number
  sort: number
  name: string
  url: string
  icon: string
  desc: string
  classify: number
}

export type Article_post = {
  id?: string | number
  title: string
  source: string
  recommend: string
  url: string
  tags: any
}

export type Page = {
  id?: string | number
  title: string
  desc: string
  content: string
  date_created: string
  slug: string
}

export type Weekly = {
  id?: string | number
  title: string
  pic: string
  articles: Article_post[]
}

// 初始化 Item 函数
function initDirectusItems<T> (collection: string) {
  return () => {
    const { getItems, getItemById } = useDirectusItems()
    return {
      // 获取列表
      getItems (data?: DirectusQueryParams) {
        const params = { collection, params: data || {} }
        return getItems<T[]>(params)
      },
      // 通过ID获取 Item
      getItemById (data: Omit<DirectusItemRequest, 'collection'> | string) {
        if (typeof data === 'string') {
          return getItemById<T>({ collection, id: data })
        }
        return getItemById<T>(Object.assign({ collection }, data))
      },
      // 通过 slug 获取 Item
      getItemBySlug (slug: string, data?: Pick<DirectusQueryParams, 'fields'>) {
        const params = Object.assign({
          filter: {
            "slug": {
              "_eq": slug
            }
          }
        }, data)
        return getItems<T[]>({
          collection,
          params
        }).then(items => items[0])
      }
    }
  }
}
// 导航
export const useNav = initDirectusItems<Nav>('nav')
// 设置
export const useSetting = initDirectusItems<Setting>('setting')
// 菜单
export const useMenu = initDirectusItems<Menu>('menu')
// 文章
export const useArticle_post = initDirectusItems<Article_post>('article_post')
// 单页
export const usePage = initDirectusItems<Page>('page')
// 导航分类
export const useClassify = initDirectusItems<Classify>('classify')
// 周刊
export const useWeekly = initDirectusItems<Weekly>('weekly')

const host = baseConfig.cmsURL
export const useFileHost = () => host + '/assets/'

type ThumbnailOption = {
  fit?: 'cover' | 'contain' | 'inside' | 'outside'
  width?: number
  height?: number
  quality?: number
  withoutEnlargement?: boolean
  format?: 'jpg' | 'png' | 'webp' | 'tiff'
}
// 将图片ID转换为真实图片路径
export function useThumbnail (id: string, opt: ThumbnailOption = {}) {
  const queryStr = Object.entries(opt).reduce((all, item) => {
    return all += item[0] + '=' + item[1] + '&'
  }, "?")
  return useFileHost() + id + queryStr
}