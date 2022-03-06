import { Classify, getClassify } from '~/api/nav';

let instance = null

export async function useClassify (): Promise<Classify[]> {
  if (!instance) {
    const resData = await getClassify()
    instance = resData.data.value.data
  }
  return instance
}