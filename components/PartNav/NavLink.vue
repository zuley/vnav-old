<script lang="ts" setup>
const Nav = defineProps<{
  title: string;
  url: string;
  desc: string;
  icon: string;
}>()
</script>
<template>
  <div class="bg-white dark:bg-gray-900 rounded-md shadow dark:text-gray-500 dark:hover:bg-gray-800">
    <a class="block p-4 pt-2" :href="url" target="_blank">
      <div class="flex items-center pt-3 pb-3">
        <div class="w-14 h-14 border rounded-md mr-3 flex items-center justify-center dark:border-gray-700">
          <img class="max-w-8 max-h-8" :src="icon" :alt="title">
        </div>
        <h3 class="dark:text-gray-300">{{ title }}</h3>
      </div>
      <div class="box">
        <div class="text-xs">{{ desc }}</div>
      </div>
    </a>
  </div>
</template>

<style lang="scss">
.m-card {
  background-color: #f2f2f2;
}
.dark .m-card {
  background-color: rgba(2,42,53,.5);
}
.m-navlink {
  width: 200px;
  height: 80px;
  a {
    display: flex;
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    transition: all .3s ease;
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