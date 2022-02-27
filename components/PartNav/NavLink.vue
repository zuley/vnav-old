<script lang="ts" setup>
import { defineProps } from 'vue'
const Nav = defineProps<{
  title: string;
  url: string;
  target: string;
  desc: string;
  icon: string;
}>()
</script>
<template>
  <div class="m-navlink">
    <nuxt-link :to="url">
      <div class="icon"><img :src="icon" :alt="title"></div>
      <div class="box">
        <h3>{{ title }}</h3>
        <div class="desc">{{ desc }}</div>
      </div>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.m-navlink {
  a {
    display: flex;
    padding: 10px;
    .icon {
      width: 26px;
      height: 26px;
      border-radius: 100%;
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