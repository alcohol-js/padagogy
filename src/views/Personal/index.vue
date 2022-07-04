<template>
  <div class="personal-container">
    <div class="max">
      <Layout>
        <template #left>
          <div class="dav">
            <div class="title">个人中心</div>
            <Menu :list="list" url="/personal" />
          </div>
        </template>
        <template #default>
          <div class="right">
            <RouterView />
          </div>
        </template>
      </Layout>
    </div>
  </div>
</template>

<script>
import Layout from "./Layout";
import Menu from "./components/Menu";
export default {
  components: {
    Layout,
    Menu,
  },
  data() {
    return {
      list: [
        { name: "个人资料", rv: "/information", value: "Information" },
        { name: "我的投稿", rv: "/mycontrib", value: "MyContrib" },
        { name: "我的收藏", rv: "/collect", value: "Collect" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.personal-container {
  padding: 60px 100px;
  .max {
    border: 1px solid @silver;
    min-height: 730px;
    display: flex;
    flex-direction: column;
    .right {
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }
}
.dav {
  height: 100%;
  // padding-top: 20px;
  background-color: #ebebeb;
  border-right: 1px solid @silver;
  .title {
    padding: 10px 20px;
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    // overflow-wrap: break-word;
    text-align: center;
    line-height: 50px;
    vertical-align: middle;
    color: @base-color;
    border-bottom: 1px solid @silver;
    // background-color: @base-color;
  }
}
</style>