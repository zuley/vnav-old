<script lang="ts" setup>
import { getMenus } from '~~/api/global';

const menuRes = await getMenus()
const menuList = menuRes.data.value.data

const opt = useOptions()
</script>
<template>
  <div class="m-header">
    <div class="logo">
      <NuxtLink to="/">
        <div class="icon">
          <img :src="opt.get('site-logo')" :alt="opt.get('site-name')">
        </div>
        <h1>{{ opt.get('site-name') }}</h1>
      </NuxtLink>
    </div>
    <ul class="menu">
      <li v-for="item in menuList" :key="item.name">
        <NuxtLink :to="item.url">{{ item.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.m-header {
  position: relative;
  line-height: 34px;
  padding: 13px 0;
  background-color: #fff;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
  >.logo {
    position: absolute;
    left: 20px;
    top: 10px;
    .icon {
      height: 34px;
      border-radius: 5px;
      display: inline-block;
      margin-right: 10px;
      vertical-align: middle;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    h1 {
      display: inline-block;
      font-weight: normal;
      vertical-align: middle;
      font-size: 24px;
    }
  }
  >.menu {
    text-align: center;
    font-size: 14px;
    li {
      display: inline-block;
      a {
        display: block;
        padding: 0 20px;
        color: #333;
        border-radius: 30px;
        background-color: #fff;
        transition: all .4s ease;
        &:hover {
          background-color: #f2f2f2;
          color: var(--global-theme-color);
        }
        &.router-link-active {
          color: var(--global-theme-color);
        }
      }
    }
  }
}
</style>