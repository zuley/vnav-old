<template>
  <div class="m-anchor">
    <ul>
      <li>热门推荐</li>
      <li class="active">热门推荐</li>
      <li>热门推荐</li>
      <li>热门推荐</li>
      <li>热门推荐</li>
    </ul>
  </div>
</template>

<style lang="scss">
.m-anchor {
  position: sticky;
  width: 100px;
  ul {
    background-color: #fff;
    border-radius: 10px;
    padding: 10px 0;
    li {
      line-height: 30px;
      padding: 0 20px;
      cursor: pointer;
      transition: color .3s ease;
      &.active {
        background-color: #f84b44;
        color: #fff;
      }
      &:hover {
        color: #f84b44;
      }
    }
  }
}
</style>