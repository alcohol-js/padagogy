<template>
  <div class="layout-container">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <!-- <div class="bottom">
      <slot name="bottom"></slot>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "~@/style/var.less";
.layout-container {
  width: 100%;
  height: 100%;
  // position: relative;
  .top {
    width: 100%;
    height: 80px;
    // position: absolute;
    // top: 0;
    // left: 0;
    // z-index: 99;
    // display: block;
    // background: blue;
  }
  .main {
    min-height: calc(100vh - 80px);
    background-color: @clouds;
  }
}
</style>