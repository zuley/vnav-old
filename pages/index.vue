<script lang="ts" setup>
const opt = useOptions()
useHead({
  title: `${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description', content: opt.get('site-description') },
    { name: 'keywords', content: opt.get('site-keys') }
  ]
})
// 存储 part 块距离顶部的值
const partOffsetObj = reactive<{ [prop in string]: number }>({})
const initPartOffset = () => {
  const nodeList = document.querySelectorAll('.js-partNav')
  nodeList.forEach((item) => {
    partOffsetObj[item.id] = (item as HTMLElement).offsetTop
  })
}
// 查找最接近顶部的 Part
const findClosePart = (top: number) => {
  // 保存最接近的 key
  let partKey = ''
  // 保存插值绝对值，默认为最大值
  let d_val = Number.MAX_VALUE;
  // 遍历对象
  for (const key in partOffsetObj) {
    // 计算新差值
    let n_val = Math.abs(partOffsetObj[key] - top)
    // 如果新差值小于旧差值，则使用新的值
    if (n_val <= d_val) {
      partKey = key
      d_val = n_val
    }
  }
  return partKey
}
// 页面滚动
const emitter = useMitt()
const handleScrollPage: EventListener = throttle((e: Event) => {
  const scrollTop = document.documentElement.scrollTop
  const closePart = findClosePart(scrollTop)
  emitter.emit('pageScroll', closePart)
}, 100, 1)

onMounted(() => {
  initPartOffset()
  document.addEventListener('scroll', handleScrollPage)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScrollPage)
})
const classify = useClassify()
const NavList = await classify.getItems()

</script>
<template>
  <div class="p-home">
    <div class="w-full flex">
      <div><Anchor :navList="NavList" /></div>
      <div class="flex-1 p-3">
        <PartNav class="js-partNav" v-for="item in NavList" :key="item.id" :classify="item" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.m-main {
  >:after {
    content: "";
    display: block;
    clear: both;
  }
  >.m-anchor {
    float: left;
  }
  >.box {
    margin-left: 120px;
  }
}
</style>