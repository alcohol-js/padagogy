<template>
  <div
    class="app-list-container"
    :style="{ width: size.width, height: size.height }"
    @click="handleClick"
  >
    <div class="title">
      <div>{{ data.apps_name }}</div>
    </div>
    <div class="img">
      <img :src="data.apps_icon" />
    </div>
    <div class="bottom">
      <div class="info">
        <div class="size">{{ data.apps_Num }}</div>
        <div class="download">{{ data.apps_downNum }}下载</div>
      </div>
      <div class="evaluate">
        <div>
          <Icon
            v-for="i in 5"
            :key="i"
            :size="iconSize"
            type="icon-shoucang"
            :color="i <= +data.apps_star ? '#f4ea2a' : '#2c3e50'"
            style="margin: 0 3px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
    iconSize: {
      type: Number,
      default: 16,
    },
  },
  data() {
    return {
      size: {
        width: this.width + "px",
        height: this.height + "px",
      },
      appData: {
        ...this.data,
      },
    };
  },
  methods: {
    handleClick() {
      this.$emit("click", this.data.apps_id);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.app-list-container {
  cursor: pointer;
  // background-color: @clouds;
  border: 1px solid @clouds;
  display: flex;
  flex-direction: column;
  .title {
    flex-shrink: 0;
    font-size: 0.5em;
    border-bottom: 1px solid @clouds;
    // box-sizing: border-box;
    width: 100%;
    height: 15%;
    // padding: auto;
    // line-height: 30px;
    // text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    // font-size: 20px;
    font-weight: 800;
    // background-color: antiquewhite;
  }
  .img {
    width: 100%;
    border-bottom: 1px solid @clouds;
    padding: 5px;
    // height: 60%;
    // background-color: aqua;
    img {
      width: calc(100% - 10px);
      height: calc(100% - 10px);
    }
  }
  .bottom {
    margin-top: auto;
    // font-size: 10%;
    width: calc(100% - 10px);
    padding: 5px;
    height: calc(25% - 10px);
    .info {
      height: 50%;
      display: flex;
      font-size: 0.3em;
      // .size {
      //   font-size: 0.3em;
      // }
      justify-content: space-between;
    }
    .evaluate {
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.4em;
    }
  }
}

// .select{
//   color: ;
// }
</style>