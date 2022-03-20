<script lang="ts" setup>
import dayjs from 'dayjs'
import { getWeeklySingle, getWeeklyList } from '~/api/weekly'

const weeklyId = useRoute().params.id
const weeklyRes = await getWeeklySingle(weeklyId as string)
const weekly = weeklyRes.data.value.data

const weeklyListRes = await getWeeklyList()
const weeklys = weeklyListRes.data.value.data

const opt = useOptions()
useMeta({
  title: `${weekly.title}-${opt.get('site-name')}`,
  meta: [
    { name: 'description', content: weekly.desc },
    { name: 'keywords', content: weekly.desc }
  ]
})

</script>

<template>
  <div class="p-weeklySingle">
    <!-- 背景 -->
    <div class="bg"><img :src="weekly.thumb" :alt="weekly.title"></div>
    <!-- 头部卡片 -->
    <div class="header g-wrap">
      <div class="thumb"><img :src="weekly.thumb" :alt="weekly.title"></div>
      <div class="box">
        <h1>{{ weekly.title }}</h1>
        <div class="meta">
          <div class="item"><span>{{ weekly.articles.length }}</span>篇文章</div>
          <div class="item"><span>27633</span>人学习</div>
        </div>
        <div class="desc">{{ weekly.desc }}</div>
        <div class="info">
          <div class="item">{{ dayjs(weekly._createTime).fromNow() }} 更新</div>
        </div>
      </div>
    </div>
    <!-- 文章列表 -->
    <div class="content g-wrap">
      <div class="posts">
        <div class="m-post" v-for="article in weekly.articles">
          <h2 class="title">
            <nuxt-link
              v-for="tag in article.tags"
              :to="{ path: '/weekly', query: { tag: tag } }"
              class="tag"
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
      <div class="news">
        <h3>最新周刊</h3>
        <div class="item" v-for="weekly in weeklys">
          <nuxt-link :to="`/article/${weekly._id}`">
            <div class="thumb"><img :src="weekly.thumb" :alt="weekly.title"></div>
            <h4>{{ weekly.title }}</h4>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.p-weeklySingle {
  >.bg {
    height: 300px;
    overflow: hidden;
    margin-top: -20px;
    img {
      display: block;
      filter: blur(50px);
      width: 100%;
      height: 100%;
    }
    position: relative;
    z-index: 0;
  }
  >.header {
    background-color: var(--module-bg-color);
    border-radius: var(--module-border-radius);
    padding: 50px 80px;
    margin-top: -200px;
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
    display: flex;
    box-sizing: border-box;
    .thumb {
      width: 300px;
      margin-right: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    >.box {
      flex: 1;
      h1 {
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 20px;
      }
      .meta {
        display: flex;
        line-height: 70px;
        color: var(--global-title-color);
        .item {
          margin-right: 30px;
          span {
            font-size: 50px;
            font-weight: bold;
            margin-right: 10px;
            color: var(--global-highlight-color);
          }
        }
      }
      .desc {
        color: var(--global-aux-color);
        font-size: 14px;
        line-height: 26px;
        margin-bottom: 20px;
      }
      .info {
        color: var(--global-aux-color);
      }
    }
  }
  >.content {
    display: flex;
    margin-bottom: 50px;
    >.posts {
      background-color: var(--module-bg-color);
      flex: 1;
      border-radius: 10px;
      margin-right: 30px;
      padding: 50px 80px;
      .m-post {
        padding-bottom: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid var(--module-border-color);
        .title {
          font-weight: normal;
          margin-bottom: 10px;
          .tag {
            background-color: var(--global-theme-color);
            opacity: .5;
            color: #fff;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 5px;
            margin-right: 10px;
            font-size: 12px;
            transition: all .3s ease;
            &:hover {
              opacity: 1;
            }
          }
          .name {
            color: var(--global-title-color);
            transition: all .3s ease;
            &:hover {
              color: var(--global-theme-color);
            }
          }
        }
        .desc {
          background-color: #f2f2f2;
          padding: 10px 20px;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        .meta {
          display: flex;
          color: var(--global-aux-color);
          .item {
            margin-right: 30px;
          }
        }
      }
    }
    >.news {
      width: 300px;
      background-color: var(--module-bg-color);
      border-radius: 10px;
      >h3 {
        line-height: 60px;
        padding: 0 20px;
        font-size: 20px;
        font-weight: normal;
      }
      >.item {
        padding: 10px 20px;
        &:hover {
          background-color: #f8f8f8;
        }
        a {
          display: flex;
          .thumb {
            width: 40px;
            height: 40px;
            overflow: hidden;
            margin-right: 10px;
            img {
              display: block;
              width: 100%;
            }
          }
          h4 {
            color: var(--global-title-color);
          }
        }
      }
    }
  }
}
</style>