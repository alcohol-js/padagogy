<template>
  <div class="menu-container">
    <ul>
      <li
        v-for="(item, i) in list"
        :key="i"
        @click="handleClick(item)"
        :class="{ selected: getHistory == item.rv }"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      required: true,
    },
  },
  computed: {
    getHistory() {
      return this.$route.path;
    },
  },
  methods: {
    handleClick(item) {
      this.$router.push(item.rv);
      console.log(this.$route.path);
    },
  },
};
</script>

<style lang="less" scoped>
// @import "~@/style/main.less";
@import "~@/style/var.less";
.menu-container {
  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
  // width: 100%;
  float: right;
  li {
    // display: inline-block;
    float: left;
    // width: 80px;
    padding: 0 20px;
    height: 80px;
    font-size: 20px;
    font-weight: 530;
    overflow-wrap: break-word;
    text-align: center;
    line-height: 80px;
    vertical-align: middle;
    color: @midnightBlue;
    // background-color: @base-color;
    cursor: pointer;
    &:hover {
      //   background-color: @midnightBlue;
      color: @base-color;
    }
    &.selected {
      //   background-color: @midnightBlue;
      box-sizing: border-box;
      color: @base-color;
      border-bottom: 3px solid @base-color;
    }
  }
}
</style>