<template>
  <div
    class="icon-container"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <i
      class="iconfont"
      :class="type"
      :style="{ fontSize: fontSize, color: color }"
    ></i>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: "#34495E",
    },
  },
  computed: {
    fontSize() {
      return this.size + "px";
    },
  },
  methods: {
    handleMouseEnter() {
      this.$emit("mouseenter", this.type);
      // console.log(1);
    },
    handleMouseLeave() {
      this.$emit("mouseleave", this.type);
    },
    handleClick() {
      // this.$emit("click");
    },
  },
};
</script>

<style lang="less">
@import "//at.alicdn.com/t/font_3267376_gw1wkzj39q6.css";
.icon-container {
  display: inline-block;
  i {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>