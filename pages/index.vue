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
  const nodeList = document.querySelectorAll('.m-partNav')
  nodeList.forEach((item: HTMLElement) => {
    partOffsetObj[item.id] = item.offsetTop
  })
}
const findClosePart = (top: number) => {
  // 保存最接近的 key
  let partKey
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
const handleScrollPage: EventListener = throttle((e: Event) => {
  const scrollTop = document.documentElement.scrollTop
  const closePart = findClosePart(scrollTop)
  console.log(closePart)
}, 100, 1)

onMounted(() => {
  console.log('页面挂载')
  initPartOffset()
  document.addEventListener('scroll', handleScrollPage)
})

onUnmounted(() => {
  console.log('页面卸载')
  document.removeEventListener('scroll', handleScrollPage)
})

const NavList = await useClassify()
</script>
<template>
  <div class="p-home">
    <div class="m-main g-wrap">
      <Anchor />
      <div class="box">
        <PartNav v-for="item in NavList" :key="item._id" :classify="item" />
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