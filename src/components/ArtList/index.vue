<template>
  <div
    class="ari-list-container"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    :class="{ select: isSelect }"
    @click="handleClick"
  >
    <!-- 图片区域 -->
    <div class="img">
      <img :src="data.article_image" alt="" />
    </div>
    <!-- 文字区域 -->
    <div class="content">
      <div class="title">{{ data.article_title }}</div>
      <div class="date">{{ data.article_update_time }}</div>
      <div class="txt">{{ data.article_descrip }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isSelect: false,
    };
  },
  methods: {
    handleMouseenter() {
      this.isSelect = true;
      console.log("111");
    },
    handleMouseleave() {
      this.isSelect = false;
    },
    handleClick() {
      this.$emit("click", this.data.article_id);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.ari-list-container {
  cursor: pointer;
  margin: 5px 0;
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 1px solid @clouds;
  // background-color: @asphalt;
  .img {
    width: 315px;
    height: 150px;
    flex: 0 0 auto;
    overflow: hidden;
    img {
      // object-fit: cover;
      width: 100%;
      // height: 100%;
    }
    // background-color: aquamarine;
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
  .content {
    width: calc(100% - 315px);
    height: 100%;
    .title {
      margin: 10px 7px 5px 7px;
      font-size: 20px;
      font-weight: 800;
      letter-spacing: 2px;
      color: @midnightBlue;
    }
    .date {
      margin-left: 7px;
      color: @concrete;
    }
    .txt {
      overflow: hidden;
      margin: 10px 7px 10px 7px;
      color: @gray;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
// .select {
//   // background-color: @midnightBlue;
// }
</style>