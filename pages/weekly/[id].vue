<template>
  <div class="p-weeklySingle">
    <!-- 背景 -->
    <div class="bg"><img src="https://images.uiiiuiii.com/wp-content/uploads/2022/02/bd-fm220226-5-6.jpg" alt=""></div>
    <!-- 头部卡片 -->
    <div class="header g-wrap">
      <div class="thumb"><img src="https://images.uiiiuiii.com/wp-content/uploads/2022/02/bd-fm220226-5-6.jpg" alt=""></div>
      <div class="box">
        <h1>2022年-第一期：调用链推荐第一期：调用链推荐第</h1>
        <div class="meta">
          <div class="item"><span>16</span>篇文章</div>
          <div class="item"><span>27633</span>人学习</div>
        </div>
        <div class="desc">本专题由「超人的电话亭」撰写，包括最经典常用的19条UX设计理论，每一条理论都包括概述、设计案例和注意事项3个部分，保证看完后能不仅能掌握定义，更能运用到实际产品设计中。</div>
        <div class="info">
          <div class="item">2022年2月28日更新</div>
        </div>
      </div>
    </div>
    <!-- 文章列表 -->
    <div class="content g-wrap">
      <div class="posts">
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
      <div class="news">
        <h3>最新周刊</h3>
        <div class="item" v-for="item in 6">
          <nuxt-link to="#">
            <div class="thumb"><img src="https://images.uiiiuiii.com/wp-content/uploads/2022/02/bd-fm220226-5-6.jpg" alt=""></div>
            <h4>让设计更有说服力的20条经典原则：美即好用</h4>
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
            font-size: 14px;
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
          background-color: #f2f2f2;
        }
        a {
          display: flex;
          .thumb {
            width: 100px;
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