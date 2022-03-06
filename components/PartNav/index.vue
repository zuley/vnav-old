<script setup lang="ts">
import { Classify } from '~/api/nav';

const classify = defineProps<Classify>()

</script>
<template>
  <div class="m-partNav">
    <div class="head">
      <h2>{{ classify.name }}</h2>
      <nuxt-link class="more" :to="`/classify/${classify.slug}`" target="_blank">更多</nuxt-link>
    </div>
    <div class="body">
      <PartNavLink
        title="测试标题"
        desc="测试描述"
        url="#"
        icon="tttt"
        target="_blank"
      />
    </div>
  </div>
</template>

<style lang="scss">
.m-partNav {
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 30px;
  >.head {
    border-bottom: 1px solid #ddd;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    >h2 {
      font-size: 16px;
      font-weight: normal;
    }
  }
}
</style>