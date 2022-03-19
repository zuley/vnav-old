<script lang="ts" setup>
import { getWeeklyList } from '~/api/weekly'
const title = '前端周刊'
const desc = '每周一期优秀前端技术文章推荐，让每一个前端 er 可以快速学习。'
const opt = useOptions()
useMeta({
  title: `${title}-${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description', content: desc },
    { name: 'keywords', content: '前端周刊,前端技术文章推荐,技术文章' }
  ]
})
const weekRes = await getWeeklyList()
const weekly = weekRes.data.value.data
console.log('weekly', weekly)
</script>
<template>
  <div class="p-weekly">
    <div class="header">
      <div class="bg">
        <img src="https://images.uiiiuiii.com/wp-content/uploads/2022/02/bd-fm220226-5-6.jpg" alt="">
      </div>
      <h1>{{ title }}</h1>
      <p>{{ desc }}</p>
    </div>
    <div class="box g-wrap">
      <div class="wrap" v-for="item in 5">
        <div class="m-weeklyItem">
          <h2><nuxt-link to="#">2022年-第一期：调用链推荐第一期：调用链推荐第</nuxt-link></h2>
          <ul class="list">
            <li><a href="#">Vue3真实项目实战！推荐！Vue3真实项目实战！推荐！</a></li>
            <li><a href="#">今天你大吃一斤了吗</a></li>
            <li><a href="#">2022了你还不会这个就该退休了</a></li>
          </ul>
          <div class="thumb"><nuxt-link to="#"><img src="https://images.uiiiuiii.com/wp-content/uploads/2022/02/bd-fm220226-5-6.jpg" alt=""></nuxt-link></div>
          <div class="footer">
            <span>文章数量：16篇</span>
            <span>发布时间：2天前</span>
            <nuxt-link class="more" to="#">查看详细 👉🏻</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.p-weekly {
  >.header {
    height: 200px;
    text-align: center;
    background-color: #fff;
    margin-bottom: 50px;
    margin-top: -20px;
    position: relative;
    overflow: hidden;
    h1 {
      padding-top: 80px;
      margin-bottom: 15px;
      position: relative;
      z-index: 1;
      font-weight: normal;
      font-size: 30px;
    }
    p {
      position: relative;
      z-index: 1;
      color: #333;
    }
    .bg {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      z-index: 0;
      filter: blur(50px);
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  >.box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    >.wrap {
      width: 50%;
      box-sizing: border-box;
      margin-bottom: 50px;
      &:nth-child(2n) {
        padding-left: 15px;
      }
      &:nth-child(2n+1) {
        padding-right: 15px;
      }
    }
  }
}
.m-weeklyItem {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px 40px 50px 40px;
  position: relative;
  padding-right: 250px;
  box-sizing: border-box;
  >.thumb {
    width: 200px;
    height: 250px;
    position: absolute;
    top: -20px;
    right: 25px;
    border-radius: 5px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  >h2 {
    font-size: 20px;
    line-height: 30px;
    font-weight: normal;
    margin-bottom: 10px;
    height: 60px;
    a {
      color: #333;
      &:hover {
        color: #000;
      }
    }
  }
  >.list {
    line-height: 40px;
    font-size: 14px;
    li {
      margin-bottom: 5px;
    }
    a {
      display: block;
      background-color: #f2f2f2;
      padding: 0 10px;
      color: #333;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      transition: all .3s ease;
      &:hover {
        background-color: #eee;
      }
    }
  }
  >.footer {
    color: #999;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    line-height: 40px;
    padding: 0 40px;
    >span {
      margin-right: 20px;
    }
    >.more {
      position: absolute;
      right: 25px;
      color: #333;
      transition: all .3s ease;
      &:hover {
        color: #000;
      }
    }
  }
}
</style>