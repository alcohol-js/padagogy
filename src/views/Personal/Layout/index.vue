<template>
  <div class="layout-container">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-start;
  .left {
    width: 200px;
    height: 100%;
    // background-color: aquamarine;
  }
  .main {
    width: calc(100% - 200px);
  }
}
</style>