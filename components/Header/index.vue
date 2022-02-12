<template>
  <div class="m-header">
    <div class="g-wrap">
      <div class="logo">LOGO</div>
      <Search />
      <div class="tools">工具</div>
    </div>
  </div>
</template>

<style lang="scss">
.m-header {
  padding: 20px 0;
  background-color: #eee;
  .g-wrap {
    display: flex;
    >.logo {
      margin-right: 20px;
    }
    >.tools {
      margin-left: 20px;
    }
    .m-search {
      flex: 1;
    }
  }
}
</style>