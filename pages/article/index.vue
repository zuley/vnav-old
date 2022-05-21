<script lang="ts" setup>
import { getArticleList } from '~/api/article'
import dayjs from 'dayjs'
const title = '前端技术'
const desc = '汇集各大社区优秀技术文章推荐，助力前端 er 快速学习。'
const opt = useOptions()
useHead({
  title: `${title}-${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description', content: desc },
    { name: 'keywords', content: '前端技术,前端技术文章推荐,技术文章' }
  ]
})
const articleRes = await getArticleList()
const articles = articleRes.data.value.data
</script>
<template>
  <div class="p-articleList">
    <div class="header">
      <div class="bg"><img src="https://images.uiiiuiii.com/wp-content/uploads/2022/02/bd-fm220226-5-6.jpg" alt=""></div>
      <h1>{{ title }}</h1>
      <div class="desc">{{ desc }}</div>
      <!-- <div class="tags g-wrap">
        <div class="tag" v-for="item in 6"><nuxt-link to="#">
          <span>#</span>vue
          <div class="num">xxx篇推荐</div>
        </nuxt-link></div>
      </div> -->
    </div>
    <div class="box g-wrap">
      <div class="m-post" v-for="article in articles">
        <h2 class="title">
          <nuxt-link
            v-for="tag in article.tags"
            :to="`/article/${tag}`" class="tag"
          >{{ tag }}</nuxt-link>
          <a class="name" :href="article.link" target="_blank">{{ article.title }}</a>
        </h2>
        <div class="desc">{{ article.recommend }}</div>
        <div class="meta">
          <div class="item">来源：{{ article.source }}</div>
          <div class="item">推荐时间：{{ dayjs(article._createTime).fromNow() }}</div>
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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