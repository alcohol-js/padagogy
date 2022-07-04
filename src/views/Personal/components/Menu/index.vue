<template>
  <div class="menu-container">
    <ul>
      <li
        v-for="(item, i) in list"
        :key="i"
        @click="handleClick(item)"
        :class="{ selected: getHistory == item.value }"
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
      type: Array,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    getHistory() {
      return this.$route.name;
    },
  },
  methods: {
    handleClick(item) {
      this.$router.push(this.url + item.rv);
      console.log(this.$route);
    },
  },
};
</script>
/[^(/a).]/
<style lang="less" scoped>
@import "~@/style/var.less";
.menu-container {
  width: 100%;
  //   height: 100%;
}
ul {
  list-style: none;
  //   height: 40px;
  margin: 0;
  padding: 0;
  width: 100%;
  float: right;
  li {
    // display: inline-block;
    // float: left;
    // width: 80px;
    padding: 10px 20px;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    // overflow-wrap: break-word;
    text-align: center;
    line-height: 50px;
    vertical-align: middle;
    // color: @clouds;
    // background-color: @asphalt;
    cursor: pointer;
    &:hover {
      background-color: @base-color;
      color: @clouds;
    }
    &.selected {
      background-color: @base-color;
      color: @clouds;
    }
  }
}
</style>