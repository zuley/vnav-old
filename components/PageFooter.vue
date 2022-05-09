<script lang="ts" setup>
const opt = useOptions()

const footerCode = opt.get('global-footer-code')
footerCode && onMounted(() => {
  const range = document.createRange()
  const fragment = range.createContextualFragment(footerCode)
  document.body.append(fragment)
})

const beianInfo = opt.get('site-beian')
</script>
<template>
  <div class="m-footer">
    <p>不勤勉的人生便是罪过，无技艺的勤劳便是粗野。</p>
    <div class="info">
      Copyright @THUNLP 2022
      <span v-html="beianInfo"></span>
    </div>
  </div>
</template>

<style lang="scss">
.m-footer {
  background-color: #fff;
  padding: 20px 0;
  text-align: center;
  line-height: 20px;
  color: #999;
}
</style>