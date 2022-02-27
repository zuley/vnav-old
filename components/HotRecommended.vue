<script lang="ts" setup>
</script>

<template>
  <div class="m-hotRecommended">
    <div class="g-wrap">
      <ul class="bar-left">
        <li><nuxt-link to="#">优秀设计</nuxt-link></li>
        <li><nuxt-link to="#">优秀设计</nuxt-link></li>
        <li><nuxt-link to="#">优秀设计</nuxt-link></li>
      </ul>
      <div class="bar-right">
        <div class="title">精选推荐</div>
        <ul>
          <li><nuxt-link to="#">优秀设计</nuxt-link></li>
          <li><nuxt-link to="#">优秀设计</nuxt-link></li>
          <li><nuxt-link to="#">优秀设计</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.m-hotRecommended {
  background-color: #fff;
  line-height: 20px;
  padding: 15px 0;
  margin-bottom: 20px;
  .g-wrap {
    display: flex;
    justify-content: space-between;
  }
  .bar-left {
    overflow: hidden;
    li {
      border-right: 1px solid #ddd;
      float: left;
      a {
        padding: 0 15px;
        color: #333;
        display: block;
        &:hover {
          color: #f84b44;
        }
      }
      &:first-child {
        a {
          padding-left: 0;
        }
      }
      &:last-child {
        border-right: none;
      }
    }
  }
  .bar-right {
    display: flex;
    .title {
      color: #999;
      margin-right: 10px;
    }
    ul {
      overflow: hidden;
      li {
        float: left;
        margin-left: 10px;
        a {
          color: #f84b44;
        }
      }
    }
  }
}
</style>