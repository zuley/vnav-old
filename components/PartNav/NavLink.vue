<script lang="ts" setup>
const Nav = defineProps<{
  title: string;
  url: string;
  desc: string;
  icon: string;
}>()
</script>
<template>
  <div class="m-navlink">
    <a :href="url" target="_blank">
      <div class="icon"><img :src="icon" :alt="title"></div>
      <div class="box">
        <h3>{{ title }}</h3>
        <div class="desc">{{ desc }}</div>
      </div>
    </a>
  </div>
</template>

<style lang="scss">
.m-navlink {
  width: 200px;
  height: 80px;
  a {
    display: flex;
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    &:hover {
      background-color: #f2f2f2;
    }
    .icon {
      width: 26px;
      height: 26px;
      border-radius: 100%;
      padding-top: 3px;
      img {
        display: block;
        width: 100%;
      }
    }
    .box {
      flex: 1;
      margin-left: 10px;
      h3 {
        font-size: 12px;
        font-weight: bold;
        color: #000;
        line-height: 20px;
        margin-bottom: 5px;
      }
      .desc {
        color: #999;
      }
    }
  }
}
</style>