<template>
  <div class="text">
      <Menu :list='list'/>
  </div>
</template>

<script>
import Menu from './index.vue'
export default {
components:{
    Menu,
},
data(){
    return {
        list: [{name: '首页',rv: '/'},{name: '文章',rv: '/article'},{name: 'padagogy',rv: '/padagogy'},{name: '工具',rv: '/tool'},{name: '投稿',rv: '/contrib'},{name: '关于',rv: '/about'},{name: '联系',rv: '/contact'}]
    }
}
}
</script>

<style>
@import "~@/style/main.less";
.text{
    width: 800px;
    height: 80px;
    background: #ccc;
}
</style>