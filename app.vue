<script setup>
const opt = await useInitOptions()
useState('options', () => opt)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>