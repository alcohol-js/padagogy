<template>
  <div class="selector-container">
    <div class="max" v-for="(item, i) in list" :key="i">
      <span class="title">{{ item.name }}</span>
      <span
        class="ele"
        v-for="(t, j) in item.children"
        :key="j"
        @click="handleClick"
        :class="{ select: t.selected }"
      >
        <input
          type="checkbox"
          name=""
          id=""
          v-model="form[i]"
          :value="t.value"
          @click.stop=""
        />{{ t.name }}</span
      >
    </div>
    <!-- <div class="max">
      <span class="title"></span>
      <span class="ele">
        <input type="checkbox" name="" id="" v-model="form" value="a" />
      </span>
    </div> -->
    <!-- <input type="checkbox" name="" id="" value="a" v-model="form" /> -->
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  computed: {
    form() {
      // console.log(this.list);
      let arr = [];
      this.list.forEach((i) => {
        let sub = [];
        if (i.children)
          i.children.forEach((t) => {
            if (t.selected) sub.push(t.value);
          });
        arr.push(sub);
      });
      return arr;
    },
  },
  methods: {
    handleClick(e) {
      // console.log(e);
      var a = e.target.childNodes[0];
      a.click();
      var arr = [];
      for (let i = 0; i < this.list.length; i++) {
        // console.log(this.form[i]);
        if (this.form[i].length != 0) {
          arr[i] = `${this.list[i].value}=${this.form[i].join(" ")}`;
        }
        // console.log(this.form[i]);
      }
      // console.log(arr);
      arr = arr.filter((i) => i);
      this.$router.push(this.$route.path + `?${arr.join("&")}`);
      // console.log(arr);
      // console.log(this.$route);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.selector-container {
  padding: 15px;
  width: calc(100% - 20px);
  // background-color: aqua;
  .max {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
    }
    .title {
      cursor: default;
      // width: 100px;
      margin-right: 30px;
      color: @clouds;
      width: 70px;
      text-align: center;
      background-color: @base-color;
      border-radius: 10px 0 10px 10px;
      // height: 100%;
      padding: 8px;
      // line-height: 100%;
    }
    .ele {
      cursor: pointer;
      color: @midnightBlue;
      margin-right: 15px;
      border-radius: 10px;
      padding: 3px 5px;
      input {
        width: 0;
        height: 0;
      }
      &.select {
        color: @clouds;
        background-color: @base-color;
      }
    }
  }
}
</style>