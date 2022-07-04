<template>
  <div class="home-container" ref="max">
    <!-- 首屏 -->
    <div class="main">
      <img src="" alt="" />
      <button @click="handleBtnClick">开始体验</button>
    </div>
    <!-- 内容区域 -->
    <div class="second" ref="second">
      <!-- 热门文章 -->
      <div class="left">
        <div class="arti">
          <Popular title="热门文章" url="/article">
            <!-- <template #default>
                <ArtList v-for="item in data" :key="item.id" :data="item" />
                aaa
              </template> -->
            <template #default>
              <ArtList
                v-for="item in data.artiResp"
                :key="item.article_id"
                :data="item"
                @click="handleArtClick(item.article_id)"
              />
              <!-- <ArtList v-for="item in data" :key="item.id"  :data="data" /> -->
              <!-- <div v-for="item in data" :key="item.id"></div> -->
            </template>
          </Popular>
        </div>
      </div>
      <!-- 热门应用 -->
      <div class="right">
        <div class="app">
          <Popular title="热门应用" url="/padagogy">
            <template #default>
              <div class="flex">
                <AppList
                  v-for="item in data.appResp"
                  :key="item.apps_id"
                  :data="item"
                  :width="150"
                  :height="270"
                  style="margin: 0 0 5px 0"
                />
              </div>
            </template>
          </Popular>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Popular from "@/components/Popular";
import ArtList from "@/components/ArtList";
import AppList from "@/components/AppList";
import fetchData from "@/mixins/fetchData.js";
import { getHotArti, getHotApp } from "@/api/home.js";
export default {
  mixins: [fetchData({})],
  components: {
    Popular,
    ArtList,
    AppList,
  },
  // computed:mapState("main",["data"]),
  methods: {
    async fetchData() {
      // 获取热门文章数据
      const artiResp = await getHotArti();
      // 获取热门app数据
      const appResp = await getHotApp();

      // console.log(artiResp, appResp);
      return { artiResp, appResp };
    },
    handleBtnClick() {
      // 点击滚动到第二屏
      // console.log(document.documentElement);
      // this.$refs.max.scrollTo({
      //   top: this.$refs.second.offsetTop,
      //   behavior: "smooth",
      // });
      this.$bus.$emit("scroll", this.$refs.second.offsetTop);
      // console.log(document.documentElement.scrollTop, "1");
    },
    handleArtClick(id) {
      this.$router.push({
        name: "ArticleDetail",
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
.home-container {
  // background-color: @clouds;
  width: 100%;
  // height: 3000px;
  .main {
    // background-color: @greenSea;
    width: 100%;
    height: calc(100vh - 80px);
    // background-image: url("~@/assets/background-img.png");
    // opacity: 0.5;
    // background-color: #fffffa;
    max-height: 1000px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      // z-index: -1; /*放在内容背后*/
      width: 100%;
      height: 100%;
      background: url("~@/assets/background-img.png");
      background-size: cover;
      opacity: 0.7;
    }
    button {
      width: 270px;
      height: 60px;
      position: absolute;
      left: 70%;
      top: 60%;
      border: none;
      border-radius: 15px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 5px;
      background-color: @base-color;
      color: #fff;
      cursor: pointer;
    }
  }
  .second {
    margin: 20px 30px 0 30px;
    padding-bottom: 20px;
    display: flex;
    .left {
      width: calc(100% - 540px);
      min-width: 780px;
      padding: 10px;
      // height: 100%;
      // background-color: antiquewhite;
      .arti {
        // margin: 10px 0 0 10px;
        width: 100%;
        // height: 100px;
        // background-color: blueviolet;
      }
    }
    .right {
      width: 500px;
      min-width: 500px;
      padding: 10px;
      .app {
        // margin: 10px ;
        width: 100%;
      }
    }
  }
}
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>