<script lang="ts" setup>
const NavList = await useClassify()
</script>
<template>
  <div class="p-home">
    <PageHeader />
    <!-- <HotRecommended /> -->
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
  display: flex;
  >.box {
    flex: 1;
    margin-left: 20px;
  }
}
</style>