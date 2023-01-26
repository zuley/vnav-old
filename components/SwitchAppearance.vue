<script lang="ts" setup>
const colorMode = useColorMode()
const handleSwitch = () => {
  if (colorMode.preference === 'dark') {
    colorMode.preference = 'light'
  } else {
    colorMode.preference = 'dark'
  }
}
</script>

<template>
  <div class="m-SwitchAppearance" @click="handleSwitch">
    <div class="check">
      <img class="moon" src="@/assets/icons/moon.svg" />
      <img class="sun" src="@/assets/icons/sun.svg" />
    </div>
  </div>
</template>

<style lang="scss">
.m-SwitchAppearance {
  width: 40px;
  height: 20px;
  border: 1px solid #ddd;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    border-color: #999;
  }
  .check {
    width: 18px;
    height: 18px;
    position: absolute;
    left: 1px;
    border-radius: 100%;
    background-color: #eee;
    padding: 2px;
    transition: all .3s ease;
    img {
      display: none;
      width: 100%;
      height: 100%;
    }
    .sun {
      display: block;
    }
  }
}
html.dark .m-SwitchAppearance {
  border-color: #444;
  background-color: #222;
  .check {
    left: 20px;
    background-color: #111;
    .moon {
      display: block;
    }
  }
}
</style>