<template>
  <div class="site-top-container">
    <!-- 网站logo -->
    <div class="logo">
      <img src="@/assets/homeLogo.png" alt="" />
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <input type="text" @focus="handleFocus" @blur="handleBlur" />
      <Icon type="icon-sousuo" :size="24" :color="color" />
    </div>
    <!-- 导航栏 -->
    <div class="nav">
      <Menu :list="data.nav" />
    </div>
    <!-- 登录 -->
    <div class="login">
      <div v-if="!user" class="login-btn">
        <button @click="handleClick">请登录</button>
      </div>
      <div v-else class="login-img" @click.stop="handleLoginClick" ref="img">
        <img :src="user.userImg" />
      </div>
      <div class="list" v-show="isShow">
        <div @click="toPersonal">个人中心</div>
        <div>退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu/index.vue";
import Icon from "@/components/Icon/index.vue";
import { mapState } from "vuex";
export default {
  components: {
    Menu,
    Icon,
  },
  data() {
    return {
      color: "#bdc3c7",
      isShow: false,
    };
  },
  computed: {
    ...mapState("main", ["data"]),
    ...mapState("user", ["user"]),
  },
  created() {
    document.addEventListener("click", (e) => {
      // console.log(e.path, this.$refs.img);
      if (this.isShow) {
        this.isShow = false;
      }
    });
  },
  methods: {
    handleFocus() {
      console.log(this.user);
      this.color = "#12B7F5";
    },
    handleBlur() {
      this.color = "#bdc3c7";
    },
    handleClick() {
      if (this.user) return;
      this.$router.push("/login");
    },
    handleLoginClick() {
      this.isShow = !this.isShow;
      // if (this.user) {
      //   this.$router.push("/personal");
      // }
    },
    toPersonal() {
      if (this.user) {
        this.$router.push("/personal");
      }
      this.isShow = false;
    },
  },
};
</script>

<style lang='less' scoped>
@import "~@/style/main.less";
@import "~@/style/var.less";
.site-top-container {
  width: 100%;
  height: 100%;
  // padding: 0 15px;
  // background-color: @base-color;
  // opacity: 0;
  // letter-spacing: 1px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: flex-end;
  .logo {
    width: 200px;
    height: 80px;
    padding-left: 20px;
    line-height: 80px;
    margin-right: auto;
    align-self: flex-start;
    // background-color: aqua;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search {
    width: 300px;
    padding: 25px 20px;
    position: relative;
    // background-color: aliceblue;
    input {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      text-indent: 10px;
      outline: none;
      border: none;
      color: @turquoise;
      background-color: @clouds;
      &:focus {
        // outline:none;
        border: 2px solid @base-color;
        // background-color: #ccc;
      }
      // transition: .5s;
    }
    .icon-container {
      position: absolute;
      top: 50%;
      transform: translate(-120%, -50%);
      // float: left;
    }
  }
  .nav {
    flex: none;
  }
  .login {
    position: relative;
    width: 80px;
    height: 80px;
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 5px;
    // background-color: aquamarine;
    flex: none;
    .login-btn {
      width: 60px;
      margin: 0 10px;
      height: 40%;
      button {
        width: 100%;
        height: 100%;
        background-color: @base-color;
        color: @clouds;
        border-radius: 5px;
        border: none;
      }
    }
    .login-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .list {
      &:before {
        z-index: -1;
        content: "";
        position: absolute;
        left: calc(50% - 3px);
        top: -3px;
        transform: rotateZ(45deg);
        border: 1px solid #fff;
        background-color: #fff;
        display: inline-block; // 此句为css样式展示重点
        width: 6px;
        height: 6px;
      }
      z-index: 99;
      position: absolute;
      top: 85px;
      width: 120px;
      height: 100px;
      background-color: #fff;
      div {
        width: 100%;
        height: 50%;
        text-align: center;
        line-height: 50px;
        &:hover {
          background-color: @base-color;
          color: @clouds;
          cursor: pointer;
        }
      }
    }
  }
}
</style>