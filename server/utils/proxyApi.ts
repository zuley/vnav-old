import { CompatibilityEvent } from 'h3'
import { UseFetchOptions } from 'nuxt/dist/app/composables'
export default async <T = any>(e: CompatibilityEvent, url: string) => {
  const req: UseFetchOptions<ResponseType> = {
    method: e.req.method,
    params: useQuery(e)
  }
  if (e.req.method === 'POST') {
    req.body = await useBody(e)
  }
  return $fetch<T>(url, req)
}