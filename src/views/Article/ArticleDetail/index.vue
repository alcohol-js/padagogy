<template>
  <div class="article-detail-container" v-if="data">
    <div class="max">
      <!-- 标题部分 -->
      <div class="top">
        <div class="title">
          <!-- <div class="left">
            <img :src="data.article_image" alt="" />
          </div> -->
          <div class="right">
            <div class="arti-title">{{ data.article_title }}</div>
            <div class="info">
              <div class="size">{{ data.article_createtime }}</div>
            </div>
          </div>
        </div>
        <div class="behavior">
          <div class="collect">
            <button @click="handleCollect">
              <!-- {{
                user.articleId.indexOf(data.article_id) >= 0 ? "已收藏" : "收藏"
              }} -->
              收藏
            </button>
          </div>
        </div>
      </div>
      <!-- 正文部分 -->
      <div class="content" v-html="data.article_content"></div>
    </div>
  </div>
</template>

<script>
import fetchData from "@/mixins/fetchData.js";
import { getArticle, collect } from "@/api/article";
import { mapState } from "vuex";
export default {
  mixins: [fetchData()],
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapState("user", ["user"]),
  },
  methods: {
    async fetchData() {
      const resp = await getArticle(this.id);
      // console.log(resp, this.id);
      return resp;
    },
    handleCollect() {
      console.log(this.user.article_Id);
      collect(this.user.user_id, this.data.article_id).then((res) => {
        this.$message({
          message: res.msg,
          type: "success",
        });
        console.log(res);
        this.$store.commit("user/setUser", res.users);
      });
    },
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
    .top {
      display: flex;
      justify-content: space-between;
    }
  }
}
.title {
  height: 100px;
  margin-bottom: 20px;
  display: flex;
  .left {
    width: 100px;
    margin-right: 10px;
    height: 100px;
    background-color: aqua;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .arti-title {
      font-size: 1.5em;
      font-weight: 1000;
    }
    .info {
      display: flex;
      justify-content: space-between;
    }
  }
}
.behavior {
  // margin: 100px 0;
  // display: flex;
  // justify-content: center;
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
</style>


