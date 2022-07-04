<template>
  <div class="padagogy-container" v-if="this.data">
    <!-- 多级选择 -->
    <div class="choose" v-show="this.data.selResp">
      <Selector :list="list" />
    </div>
    <!-- app列表 -->
    <div class="list" v-if="!isLoading">
      <AppList
        v-for="item in data.appResp.rows"
        :key="item.id"
        :data="item"
        :iconSize="20"
        :width="300"
        :height="450"
        style="margin: 10px auto; background-color: #fff; flex: 0 1 auto"
        @click="handleClick"
      />
      <!-- <AppList
        v-for="item in data.appResp.rows"
        :key="item.id"
        :data="item"
        :iconSize="20"
        :width="300"
        :height="450"
        class="app-list"
        @click="handleClick"
      /> -->
    </div>
    <!-- 分页 -->
    <div class="pager">
      <Pager
        v-if="data.appResp"
        :current="page"
        :total="+data.appResp.total"
        :limit="20"
        :visibleNumber="10"
        @pageChange="handlePageChange"
      />
    </div>
  </div>
</template>

<script>
import Selector from "./components/Selector";
import AppList from "@/components/AppList";
import fetchData from "@/mixins/fetchData.js";
import Pager from "@/components/Pager";
import { getAppList, getSelector } from "@/api/padagogy.js";
export default {
  mixins: [fetchData({})],
  components: {
    Selector,
    AppList,
    Pager,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    // 获取url参数
    param() {
      return this.$route.query;
    },
    list() {
      // console.log(this.data.selResp);
      //加工后传给Selector组件的属性
      var arr = [];

      var firstList = [];
      if (this.data.selResp) {
        firstList = JSON.parse(JSON.stringify(this.data.selResp));
      }
      // console.log(this.data.selResp, firstList);
      //将从url中拿到的参数进行分割
      for (const key in this.param) {
        arr.push(this.param[key].split(" "));
      }

      //数组扁平化
      arr = arr.flat(Infinity);

      //遍历多级菜单数据，为每项数据加上selected属性
      function traverse(arr, sub) {
        // console.log()
        let newArr = arr.map((t) => {
          let selected = sub.indexOf(t.value) >= 0;
          // console.log(selected);
          if (t.children) t.children = traverse(t.children, sub);
          return {
            selected,
            ...t,
          };
        });
        return newArr;
      }
      arr = traverse(firstList, arr);
      // console.losg(arr);
      return arr;
    },
  },
  methods: {
    async fetchData() {
      // console.log(Object.keys(this.param).length, this.$route.query, "1");
      let param = Object.keys(this.param).length ? this.param : "all";
      // console.log("请求");
      const selResp = await getSelector();
      const appResp = await getAppList(this.page, 20, param);
      return {
        selResp,
        appResp,
      };
    },
    handlePageChange(newPage) {
      // console.log(newPage);
      this.page = newPage;
    },
    handleClick(id) {
      this.$router.push({
        name: "PadagogyDetail",
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
      this.data.appResp = await getAppList(this.page, 20, this.param);
      this.isLoading = false;
    },
    async $route() {
      console.log("url");
      this.page = 1;
      this.data.appResp = await getAppList(this.page, 20, this.param);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.padagogy-container {
  padding: 20px 40px 0 40px;
  width: calc(100% - 80px);
  // height: 1000px;
  .choose {
    background-color: #fff;
  }
  .list {
    padding: 5px;
    font-size: 50px;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    // background-color: #fff;
    justify-content: flex-start;
  }
  .pager {
    padding: 10px 0;
  }
}
// #a {
//   width: 0;
//   height: 0;
// }
</style>

