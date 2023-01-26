z<script lang="ts" setup>
import { useThumbnail, useMenu } from '~~/composables/useCms';
const menu = useMenu()
const menuList = await menu.getItems({ limit: 20, page: 1 })
const opt = useOptions()
const dark = useDarkMode()

</script>
<template>
  <div class="bg-white shadow dark:bg-slate-900 w-full sticky top-0 z-50 bg-opacity-80 backdrop-filter backdrop-blur-[12px] border-none">
    <div class="flex items-center gap-4 justify-between w-full container mx-auto px-4 py-2 h-14">
      <NuxtLink class="flex items-center" to="/" :title="opt.get('site-name')">
        <div class="h-8 pr-4">
          <img class="h-full" :src="useThumbnail(opt.get('site-logo'))" :alt="opt.get('site-name')">
        </div>
        <h1 class="dark:text-slate-200">{{ opt.get('site-name') }}-{{ opt.get('site-subtitle') }}</h1>
      </NuxtLink>
      <ul class="flex gap-4">
        <li
          class=""
        v-for="item in menuList" :key="item.name">
          <NuxtLink class="dark:text-slate-200" :to="item.url" :target="'_blank'">{{ item.name }}</NuxtLink>
        </li>
        <li>
          <SwitchAppearance></SwitchAppearance>
        </li>
      </ul>
    </div>
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
      font-size: 18px;
      color: #666;
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