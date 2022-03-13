import { OptionData } from '~~/api/global';

type OptionCode = 'site-name'
  | 'site-subtitle'
  | 'site-keys'
  | 'site-logo'
  | 'site-description'

export default function () {
  const options = useState<OptionData[]>('options')
  function get (code: OptionCode) {
    const actItem = options.value.find(el => el.code === code) || { value: '' }
    // 如果是图片类型，且只有一张图片，则直接转换为字符串
    if (actItem['value-pic'] && actItem['value-pic'].length === 1) {
      actItem['value-pic'] = actItem['value-pic'][0]
    }
    return actItem.value || actItem['value-json'] || actItem['value-pic']
  }
  return {
    options,
    get
  }
}