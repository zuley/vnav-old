<script lang="ts" setup>
const props = defineProps<{
  title: string
  items: {
    href: string
    name: string
  }[]
}>()
</script>

<template>
  <div class="part">
    <h3 class="title">{{ title }}</h3>
    <ul>
      <li v-for="item in items"><nuxt-link :to="item.href">{{ item.name }}</nuxt-link></li>
    </ul>
  </div>
</template>