<template>
  <div class="article-container" v-if="!isLoading" v-loading="isLoading">
    <div class="article" v-show="data">
      <ArtList
        v-for="item in data.rows"
        :key="item.id"
        :data="item"
        @click="handleClick"
      />
    </div>
    <div class="pager">
      <Pager
        v-if="data"
        :current="page"
        :total="+data.total"
        :limit="10"
        :visibleNumber="10"
        @pageChange="handlePageChange"
      />
    </div>
  </div>
</template>

<script>
import ArtList from "@/components/ArtList";
import fetchData from "@/mixins/fetchData.js";
import Pager from "@/components/Pager";
import { getArtList } from "@/api/article.js";
export default {
  mixins: [fetchData()],
  components: {
    ArtList,
    Pager,
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    async fetchData() {
      return await getArtList(this.page, 10);
    },
    handlePageChange(newPage) {
      this.page = newPage;
    },
    handleClick(id) {
      console.log(id);
      this.$router.push({
        name: "ArticleDetail",
        params: {
          id,
        },
      });
    },
  },
  watch: {
    page: async function () {
      // console.log("1");
      this.isLoading = true;
      this.data = await getArtList(this.page, 10);
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.article-container {
  width: calc(100% - 200px);
  padding: 30px 100px;
  .article {
    width: calc(100% - 40px);
    padding: 10px 20px;
    background-color: #fff;
  }
}
</style>