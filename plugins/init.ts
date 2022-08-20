import dayjs from 'dayjs'
import relativeTime  from 'dayjs/plugin/relativeTime.js'
import 'dayjs/locale/zh-cn.js'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export default {}