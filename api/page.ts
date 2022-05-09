import URL from '~/config/url.config'
interface Page {
  title: string;
  desc: string;
  content: string;
}
export async function getPageSingle (id: string) {
  return await useAsyncData<{ data: Page }>(`page-${id}`, () => $fetch(URL.page.single + id, ))
}