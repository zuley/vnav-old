<script lang="ts" setup>
// 初始化 options，异步设置 state 在 cmposables 中失效
const opt = await useInitOptions()
useState('options', () => opt)
</script>
<template>
  <div class="l-default bg-gray-100 dark:bg-black">
    <PageHeader />
      <slot />
    <PageFooter />
  </div>
</template>