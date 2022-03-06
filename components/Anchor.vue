<script lang="ts" setup>

const NavList = await useClassify()
const handleNav = (item) => {
  console.log('点击导航')
}
</script>

<template>
  <div class="m-anchor">
    <ul>
      <li v-for="item in NavList" @click="handleNav(item)">{{ item.name }}</li>
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