<script setup lang="ts">
import { Classify, getNav } from '~/api/nav';

const Props = defineProps<{
  classify: Classify
}>()

const navRes = await getNav(Props.classify._id)
const navList = navRes.data.value.data

</script>
<template>
  <div class="m-partNav" :id="`js-${classify._id}`">
    <div class="head">
      <h2>{{ classify.name }}</h2>
      <div class="tips">{{ classify.desc }}</div>
      <nuxt-link class="more" :to="`/classify/${classify.slug}`">更多</nuxt-link>
    </div>
    <div class="body">
      <PartNavLink
        v-for="item in navList"
        :key="item._id"
        :title="item.name"
        :desc="item.desc"
        :url="item.url"
        :icon="item.icon"
      />
    </div>
  </div>
</template>

<style lang="scss">
.m-partNav {
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 30px;
  overflow: hidden;
  >.head {
    border-bottom: 1px solid #ddd;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    >h2 {
      font-size: 16px;
      font-weight: normal;
    }
    >.tips {
      flex: 1;
      padding-left: 20px;
      color: #999;
    }
    >.more {
      color: #666;
      &:hover {
        color: #f00;
      }
    }
  }
  >.body {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 10px;
    .m-navlink {
      width: 200px;
    }
  }
}
</style>