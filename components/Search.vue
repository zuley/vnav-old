<script lang="ts" setup>
import { ref, computed } from 'vue'
const tabList = [
  { title: '百度', placeholder: '输入关键词在百度进行搜索', handleSearch: () => {
    window.open(`https://www.baidu.com/s?wd=${keywords.value}`, '_blank')
  } },
  { title: '谷歌', placeholder: '输入关键词在谷歌进行搜索', handleSearch: () => {
    window.open(`https://www.google.com.hk/search?q=${keywords.value}`, '_blank')
  } },
  { title: '掘金', placeholder: '搜索掘金技术文章', handleSearch: () => {
    window.open(`https://juejin.cn/search?query=${keywords.value}`, '_blank')
  } },
]
const activeIndex = ref(0)
const actTab = computed(() => {
  return tabList[activeIndex.value]
})
const keywords = ref('')
const handleSearch = () => {
  if (keywords.value === '') {
    alert('请输入关键字')
    return
  }
  tabList[activeIndex.value].handleSearch()
}
</script>

<template>
  <div class="m-search">
    <ul class="tab">
      <li
        v-for="(item, index) in tabList" @click="activeIndex = index"
        :class="{ active: activeIndex === index }"
      >{{ item.title }}</li>
    </ul>
    <div class="box">
      <input type="text" :placeholder="actTab.placeholder" v-model="keywords">
      <div class="btn" @click="handleSearch">{{ actTab.title }}搜索</div>
    </div>
  </div>
</template>

<style lang="scss">
.m-search {
  font-size: 14px;
  line-height: 40px;
  >.tab {
    display: flex;
    margin-left: 50px;
    li {
      padding: 0 30px;
      color: rgba($color: #fff, $alpha: .9);
      cursor: pointer;
      &.active {
        background-color: #fff;
        color: #333;
        border-radius: 5px 5px 0 0;
      }
      &:hover:not(.active) {
        color: rgba($color: #fff, $alpha: 1.0);
      }
    }
  }
  >.box {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    input {
      flex: 1;
      border: none;
      padding: 0;
      outline: none;
      margin-left: 20px;
      min-width: 200px;
    }
    .btn {
      background-color: #69bdfb;
      padding: 0 20px;
      border-radius: 0 5px 5px 0;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: darken($color: #69bdfb, $amount: +5%);
      }
    }
  }
}
</style>