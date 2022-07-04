<template>
  <div class="article-detail-container" v-if="data">
    <div class="max">
      <!-- 标题部分 -->
      <div class="title">
        <!-- 应用图片 -->
        <div class="left">
          <img :src="data.apps_icon" alt="" />
        </div>
        <!-- 应用信息 -->
        <div class="main">
          <div class="arti-title">{{ data.apps_name }}</div>
          <div class="info">
            <div class="evaluate">
              <div>
                <Icon
                  v-for="i in 5"
                  :key="i"
                  type="icon-shoucang"
                  :color="i <= +data.apps_star ? '#f4ea2a' : '#2c3e50'"
                  style="margin: 0 3px"
                />
              </div>
            </div>
            <div class="size" style="display: inline-block">
              {{ data.apps_Num }}
            </div>
            <div class="download" style="display: inline-block">
              {{ data.apps_downNum }}下载
            </div>
          </div>
        </div>
        <!-- 本地下载 -->
        <div class="download">
          <a :href="data.apps_down">立即下载</a>
        </div>
        <!-- 扫码下载 -->
        <div class="right">
          <img :src="data.apps_qr" alt="" />
          <div class="txt">扫一扫下载</div>
        </div>
      </div>
      <!-- 图片部分 -->
      <div class="img">
        <img v-for="item in data.infoPic" :key="item" :src="item" alt="" />
      </div>
      <!-- 正文部分 -->
      <div class="content" v-html="data.apps_info"></div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getApp } from "@/api/padagogy";
import Icon from "@/components/Icon";
export default {
  mixins: [fetchData()],
  components: {
    Icon,
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    async fetchData() {
      console.log("1");
      const resp = await getApp(this.id);
      console.log(resp);
      return resp;
    },
    handleLike() {},
    handleCollect() {},
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.article-detail-container {
  // margin: 10px 50px;
  padding: 20px 250px;
  .max {
    background-color: #fff;
    // overflow: hidden;
    padding: 50px;
  }
}
.title {
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  .left {
    width: 200px;
    margin-right: 10px;
    height: 200px;
    margin-right: 30px;
    // background-color: aqua;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .arti-title {
      margin-top: 10px;
      font-size: 2em;
      font-weight: 1000;
    }
    .info {
      // display: flex;
      // justify-content: space-between;
      margin-bottom: 10px;
    }
  }

  .download {
    width: 150px;
    height: 100%;
    margin-left: 20px;
    a {
      display: inline-block;
      width: 100%;
      height: 50px;
      background-color: @base-color;
      color: #fff;
      text-align: center;
      line-height: 50px;
    }
  }
  .right {
    width: 200px;
    height: 200px;
    margin-left: auto;
    text-align: center;
    img {
      // width: 100%;
      height: calc(100% - 40px);
    }
    .txt {
      text-align: center;
    }
  }
}
.behavior {
  margin: 100px 0;
  display: flex;
  justify-content: center;
  button {
    margin: 0 50px;
    width: 150px;
    height: 50px;
    background-color: @base-color;
    border: none;
    color: @clouds;
    letter-spacing: 5px;
    font-size: 1em;
    font-weight: 800;
    cursor: pointer;
  }
}

.size {
  &::after {
    content: "";
    // position: absolute;
    // left: 16px;
    // top: 45%;
    border: 1px solid #000;
    background-color: #000;
    display: inline-block; // 此句为css样式展示重点
    width: 3px;
    height: 3px;
    border-radius: 50%;
    margin: auto 12px;
  }
}

//轮播图部分样式
.img {
  // margin: 10px 0;
  padding: 10px 0;
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-around;
  background-color: rgb(243, 243, 243);
  overflow: hidden;
}
</style>