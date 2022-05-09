<script lang="ts" setup>
import { getPageSingle } from '~/api/page'
const pageId = useRoute().params.id as string
const pageRes = await getPageSingle(pageId)
const page = pageRes.data.value.data

const opt = useOptions()
useHead({
  title: `${page.title}-${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description', content: page.desc }
  ]
})
</script>

<template>
  <div class="p-page">
    <div class="g-wrap">
      <h1>{{ page.title }}</h1>
      <div class="desc">{{ page.desc }}</div>
      <div class="m-fomat" v-html="page.content"></div>
    </div>
  </div>
</template>

<style lang="scss">
.p-page {
  background-color: #fff;
  margin-top: -20px;
  min-height: calc(100vh - 141px);
  >.g-wrap {
    padding: 60px 0;
    >h1 {
      font-size: 30px;
      margin-bottom: 30px;
    }
    >.desc {
      font-size: 14px;
      background-color: #f8f8f8;
      color: #999;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 20px;
    }
  }
}
</style>