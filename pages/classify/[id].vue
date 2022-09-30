<script lang="ts" setup>
const route = useRoute()
const classifyCMS = useClassify()
const navCMS = useNav()
const classify = await classifyCMS.readOne(route.params.id as string)
const { data: navList } = await navCMS.readByQuery({ limit: 20, page: 1, 
  filter: {
    "classify": {
      "_eq": classify.id
    }
  }
})
const opt = useOptions()
useHead({
  title: `${classify.name}-${opt.get('site-name')}-${opt.get('site-subtitle')}`,
  meta: [
    { name: 'description', content: classify.desc },
    { name: 'keywords', content: navList.map(el => el.name).join(',') }
  ]
})

</script>
<template>
  <div class="p-classifySingle">
    <div class="header">
      <div class="bg"><i :style="`background-image: url(${classify.icon}});`"></i></div>
      <h1>{{ classify.name }}</h1>
      <p>{{ classify.desc }}</p>
    </div>
    <div class="NavBox g-wrap">
      <PartNavLink
        v-for="item in navList"
        :key="item.id"
        :title="item.name"
        :desc="item.desc"
        :url="item.url"
        :icon="useThumbnail(item.icon)"
      />
    </div>
  </div>
</template>

<style lang="scss">
.p-classifySingle {
  min-height: calc(100vh - 161px);
  >.header {
    color: #fff;
    height: 200px;
    text-align: center;
    position: relative;
    overflow: hidden;
    top: -20px;
    >.bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ff6000;
      filter: blur(30px);
      >i {
        width: 100%;
        height: 100%;
        background-size: 100%;
        display: block;
      }
    }
    h1 {
      padding-top: 50px;
      font-size: 40px;
      line-height: 40px;
      color: #fff;
      position: relative;
      z-index: 1;
    }
    p {
      position: relative;
      z-index: 1;
      font-size: 14px;
      opacity: .8;
    }
  }
  >.NavBox {
    position: relative;
    top: -70px;
    display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 10px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 20px;
  }
}
</style>