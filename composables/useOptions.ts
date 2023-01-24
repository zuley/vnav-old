export interface OptionData {
  _id: string
  code: string
  name: string
  value?: string
  'value-pic'?: string
  'value-json'?: string
}

type OptionCode = 'site-name'
  | 'site-subtitle'
  | 'site-keys'
  | 'site-logo'
  | 'site-description'
  | 'global-head-code'
  | 'global-footer-code'
  | 'site-beian'

export default function () {
  const options = useState<OptionData[]>('options')
  function get (code: OptionCode) {
    const actItem = options.value.find(el => el.code === code) || { value: '' }
    return actItem.value as string
  }
  return {
    options,
    get
  }
}