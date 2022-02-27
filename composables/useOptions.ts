import { OptionData } from '~~/api/global';

type OptionCode = 'site-name'
  | 'site-subtitle'
  | 'site-keys'
  | 'site-logo'

export default function () {
  const options = useState<OptionData[]>('options')
  function get (code: OptionCode) {
    return options.value.find(el => el.code === code)
  }
  return {
    options,
    get
  }
}