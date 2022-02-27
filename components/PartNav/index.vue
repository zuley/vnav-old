<template>
  <div class="m-partNav">
    <div class="head">
      <h2>热门推荐</h2>
      <nuxt-link class="more" to="#" target="_blank">更多</nuxt-link>
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