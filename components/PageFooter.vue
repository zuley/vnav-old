<script lang="ts" setup>
const parts = [
  {
    title: '资源',
    items: [
      { name: '帮助中心', href: "#" },
      { name: '建议反馈', href: "#" },
      { name: '隐私安全', href: "#" },
      { name: 'Github链接', href: "#" },
    ]
  },
  {
    title: '产品',
    items: [
      { name: '小程序端', href: "#" },
      { name: '浏览器插件', href: "#" },
      { name: '文档插件', href: "#" },
    ]
  },
  {
    title: '团队',
    items: [
      { name: '团队介绍', href: "#" },
      { name: '联系我们', href: "#" },
      { name: '加入我们', href: "#" },
    ]
  },
  {
    title: '关于我们',
    items: [
      { name: '我们来自', href: "#" },
    ]
  },
]
</script>

<template>
  <div class="m-footer">
    <div class="content">
      <FooterPart
        v-for="part in parts"
        :title="part.title"
        :items="part.items"
      />
      <div class="pic"></div>
      <div class="pic"></div>
    </div>
    <div class="info">Copyright @THUNLP 2022</div>
  </div>
</template>

<style lang="scss">
.m-footer {
  background-color: #F3F1F1;
  padding: 40px 110px 0 160px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  >.content {
    display: flex;
    justify-content: space-between;
    >.pic {
      width: 110px;
      height: 110px;
      background-color: #fff;
    }
    >.part {
      .title {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        margin-bottom: 2px;
      }
      ul {
        li a{
          color: #000;
          line-height: 17px;
          &:hover {
            color: var(--themeColor);
          }
        }
      }
    }
  }
  >.info {
    padding: 30px 0 15px 0;
    text-align: center;
    line-height: 17px;
  }
}
</style>