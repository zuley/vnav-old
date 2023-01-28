import { Directus } from '@directus/sdk'
import type { Classify } from '~~/composables/useCms'
const config = useRuntimeConfig()

type MyCollections = {
  classify: Classify
}
const cms = new Directus<MyCollections>(config.public.directus.url)

export default cms