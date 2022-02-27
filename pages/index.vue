<script lang="ts" setup>
// import PageHeader from '~~/components/PageHeader.vue';
// import Anchor, { AnchorLink } from 'ant-design-vue/lib/anchor'
// import 'ant-design-vue/lib/anchor/style'
</script>
<template>
  <div class="p-home">
    <PageHeader />
    <!-- <HotRecommended /> -->
    <div class="m-main g-wrap">
      <Anchor />
      <div class="box">
        <PartNav />
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