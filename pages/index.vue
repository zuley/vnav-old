<script lang="ts" setup>
const opt = useOptions()
useHead({
  title: `${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description', content: opt.get('site-description') },
    { name: 'keywords', content: opt.get('site-keys') }
  ]
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