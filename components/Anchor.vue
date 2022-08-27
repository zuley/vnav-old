<script lang="ts" setup>

import { PartialItem } from '@directus/sdk';
import { Classify } from '~~/composables/useCms';


const Props = defineProps<{
  navList: PartialItem<Classify>[]
}>()

const NavList = Props.navList

const handleNav = (item: PartialItem<Classify>) => {
  const dom: any = document.querySelector(`#js-${item.id}`)
  window.scrollTo({
    top: dom.offsetTop - 70,
    behavior: 'smooth'
  })
}


const emitter = useMitt()
const actAnchor = ref('')
onMounted(() => {
  emitter.on('pageScroll', (e: string) => {
    actAnchor.value = e
  })
  emitter.emit('pageScroll', 'js-1')
})
</script>

<template>
  <div class="w-48 p-3 pt-0 sticky top-20">
    <ul>
      <li
        class="px-4 py-3 mb-2 text-sm text-left flex gap-2 items-center rounded-md transition-colors duration-150 ease-in-out 
        shadow bg-white dark:bg-gray-900 text-gray-600"
        v-for="item in NavList" @click="handleNav(item)"
        :class="{ 'text-red-600': actAnchor === `js-${item.id}` }"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>