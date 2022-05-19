<script lang="ts" setup>
import { Classify } from '~~/api/nav';

const NavList = await useClassify()
const handleNav = (item: Classify) => {
  const dom: any = document.querySelector(`#js-${item._id}`)
  window.scrollTo({
    top: dom.offsetTop - 20,
    behavior: 'smooth'
  })
}


const emitter = useMitt()
const actAnchor = ref('')
onMounted(() => {
  emitter.on('pageScroll', (e: string) => {
    actAnchor.value = e
  })
})
</script>

<template>
  <div class="m-anchor">
    <ul>
      <li
        v-for="item in NavList" @click="handleNav(item)"
        :class="{ active: actAnchor === `js-${item._id}` }"
      >{{ item.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
.m-anchor {
  position: sticky;
  top: 20px;
  width: 100px;
  ul {
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 0;
    li {
      line-height: 30px;
      padding: 0 20px;
      cursor: pointer;
      transition: color .3s ease;
      color: #666;
      &.active {
        background-color: #f84a442f;
        color: #333;
      }
    }
  }
}
</style>