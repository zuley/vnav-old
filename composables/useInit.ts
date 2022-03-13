import { getOptions } from "~~/api/global";

export const useInitOptions = async () => {
  const res = await getOptions()
  const opt = res.data.value.data
  return opt
}

export function useTest () {
  useState('test', () => '33333')
}