<script setup lang="ts">
import { PartialItem } from '@directus/sdk';
import { Classify, useThumbnail } from '~~/composables/useCms';


const Props = defineProps<{
  classify: PartialItem<Classify>
}>()

const navCms = useNav()

let { data: navList } = await navCms.readByQuery({
  limit: 20,
  page: 1,
  filter: {
    classify: Props.classify.id
  },
})
const fileHost = useFileHost()

</script>
<template>
  <div class="mb-6" :id="`js-${Props.classify.id}`">
    <div class="flex items-center mb-3 dark:text-gray-500">
      <h2 class="text-3xl">{{ Props.classify.name }}</h2>
      <div class="flex-1 ml-3">{{ Props.classify.desc }}</div>
      <nuxt-link class="more" :to="`/classify/${Props.classify.slug}`">更多</nuxt-link>
    </div>
    <div class="grid grid-cols-6 gap-x-3 gap-y-3">
      <PartNavLink
        v-for="item in navList"
        :key="item.id"
        :title="item.name"
        :desc="item.desc"
        :url="item.url"
        :icon="item.icon ? useThumbnail(item.icon) : ''"
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
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 10px;
    padding: 20px;
    .m-navlink {
      width: 200px;
    }
  }
}
</style>