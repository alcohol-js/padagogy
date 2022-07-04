<template>
  <div class="app-container" ref="max">
    <!-- <div style="height: 80px"></div> -->
    <Layout>
      <template #top>
        <div></div>
        <SiteTop />
      </template>
      <template #default>
        <RouterView />
      </template>
      <!-- <template #bottom>
        <div class="base"></div>
      </template> -->
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import SiteTop from "@/components/SiteTop";

export default {
  components: {
    Layout,
    SiteTop,
  },
  created() {
    this.$bus.$on("scroll", (e) => {
      this.$refs.max.scrollTo({
        top: e,
        behavior: "smooth",
      });
    });
  },
  destroyed() {
    this.$bus.$off("scroll");
  },
};
</script>

<style lang="less">
@import "~@/style/var.less";
.app-container {
  overflow-y: scroll;
  height: 100vh;
  max-width: 2000px;
  margin: 0 auto;
  // position: relative;
}
.base {
  width: 100%;
  height: 200px;
  background-color: @asphalt;
}
</style>
