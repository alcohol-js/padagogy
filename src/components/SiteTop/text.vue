<template>
  <div class="text-container">
      <SiteTop />
  </div>
</template>

<script>
import SiteTop from './index.vue'
export default {
components:{
    SiteTop,
}
}
</script>

<style lang='less' scoped>
// @import '~@/style/main.less';
@import '~@/style/var.less';
.text-container{
    width: 100%;
    height: 80px;
    background-color: @asphalt;
}
</style>