<template>
  <div class="popular-container">
    <!-- 头部区域 -->
    <div class="top">
      <div class="title">{{ title }}</div>
      <div class="more">
        <router-link :to="url">更多>></router-link>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.popular-container {
  width: 100%;
  // height: 100%;
  padding-bottom: 15px;
  background-color: #fff;
  // border-radius: 10px;
  .top {
    width: 100%;
    height: 60px;
    // background-color: @greenSea;
    border-bottom: 1px solid @clouds;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 24px;
      font-weight: 1000;
      margin-left: 10px;
      color: @base-color;
    }
    .more {
      margin-right: 10px;
    }
  }
  .content {
    // background-color: @asphalt;
    // padding-bottom: 5px;
    padding: 10px 5px;
  }
}
</style>