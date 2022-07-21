interface BaseConfig {
  /** CMS 地址 */
  cmsURL: string
}

const devConfig: BaseConfig = {
  cmsURL: 'http://101.33.224.203:8056'
}

const prodConfig: BaseConfig = {
  cmsURL: 'http://localhost:8056'
}

export default process.env.NODE_ENV === 'development' ? devConfig : prodConfig