<script lang="ts" setup>
const title = '前端技术'
const desc = '汇集各大社区优秀技术文章推荐，助力前端 er 快速学习。'
const opt = useOptions()
useMeta({
  title: `${title}-${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description', content: desc },
    { name: 'keywords', content: '前端技术,前端技术文章推荐,技术文章' }
  ]
})
</script>
<template>
  <div class="p-articleList">
    <div class="header">
      <div class="bg"><img src="https://images.uiiiuiii.com/wp-content/uploads/2022/02/bd-fm220226-5-6.jpg" alt=""></div>
      <h1>{{ title }}</h1>
      <div class="desc">{{ desc }}</div>
      <div class="tags g-wrap">
        <div class="tag" v-for="item in 6"><nuxt-link to="#">
          <span>#</span>vue
          <div class="num">269篇推荐</div>
        </nuxt-link></div>
      </div>
    </div>
    <div class="box g-wrap">
      <div class="m-post" v-for="item in 6">
        <h2 class="title">
          <nuxt-link to="#" class="tag">Vue</nuxt-link>
          <a class="name" href="#" target="_blank">让设计更有说服力的20条经典原则：美即好用</a>
        </h2>
        <div class="desc">当老板问你为什么要用这个动效时，拿出经典的「多尔蒂门槛」法则，让 TA 知道你的设计是有理有据的！</div>
        <div class="meta">
          <div class="item">来源：掘金</div>
          <div class="item">推荐时间：2019-04-24</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.p-articleList {
  >.header {
    padding: 100px 0;
    height: 350px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin-top: -20px;
    margin-bottom: 30px;
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      img {
        display: block;
        width: 100%;
        height: 100%;
        filter: blur(50px);
      }
    }
    >* {
      position: relative;
      z-index: 1;
      text-align: center;
    }
    >h1 {
      font-size: 40px;
      font-weight: normal;
      line-height: 40px;
      margin-bottom: 10px;
      color: #000;
    }
    >.desc {
      color: #333;
      font-size: 14px;
      margin-bottom: 50px;
    }
    .tags {
      display: flex;
      justify-content: space-between;
      .tag {
        background-color: #fff;
        text-align: left;
        border-radius: 5px;
        font-size: 20px;
        min-width: 180px;
        opacity: .7;
        transition: all .3s ease;
        &:hover {
          opacity: 1;  
        }
        a {
          padding: 20px 30px;
          display: block;
          color: #333;
        }
        .num {
          color: #999;
          font-size: 14px;
          padding-top: 10px;
        }
      }
    }
  }
  >.box {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 30px;
    >.m-post {
      width: 50%;
      padding: 20px;
      box-sizing: border-box;
      >.title {
        margin-bottom: 10px;
        .tag {
          color: #fff;
          background-color: #666;
          border-radius: 5px;
          padding: 3px 10px;
          font-size: 12px;
          margin-right: 10px;
        }
        a {
          color: #333;
        }
        .name {
          &:hover {
            color: #f00;
          }
        }
      }
      >.desc {
        color: #666;
        background-color: #f2f2f2;
        padding: 5px 10px;
        border-radius: 5px;
        margin-bottom: 10px;
      }
      >.meta {
        display: flex;
        color: #999;
        .item {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>