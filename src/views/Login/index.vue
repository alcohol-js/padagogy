<template>
  <div class="login-container">
    <div class="box">
      <!-- 登录图标 -->
      <div class="login-icon"></div>
      <!-- 登陆表单 -->
      <div class="login">
        <div class="login-form">
          <div class="form-grop">
            <input
              type="text"
              name="text"
              @focus="handleFocus"
              @blur="handleBlur"
              v-model="form.username"
            />
            <Icon type="icon-yonghu" :size="24" :color="text" />
          </div>
          <div class="form-grop">
            <input
              type="password"
              name="password"
              @focus="handleFocus"
              @blur="handleBlur"
              v-model="form.password"
            />
            <Icon type="icon-tianchongxing-" :size="24" :color="password" />
          </div>
          <div class="form-btn">
            <button @click="HandleClick">LOGIN</button>
          </div>
          <router-link to="">Lost&nbsp;your&nbsp;password</router-link>
          <!-- 第三方登录 -->
          <div class="third">
            <Icon
              type="icon-QQ"
              :size="24"
              :color="QQ"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              @click="handleIconClick"
            />
            <Icon
              type="icon-weixin"
              :size="24"
              :color="weixin"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              @click="handleIconClick"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      text: "#bdc3c7",
      password: "#bdc3c7",
      form: {
        username: "",
        password: "",
        cellphone: "",
        status: "putong",
      },
      QQ: "#bdc3c7",
      weixin: "#bdc3c7",
      patt: /(?<=-).+/,
    };
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  methods: {
    handleFocus(e) {
      this[e.target.name] = "#12B7F5";
    },
    handleBlur(e) {
      this[e.target.name] = "#bdc3c7";
    },
    async HandleClick() {
      console.log(this.$store);

      await this.$store.dispatch("user/fetchUser", this.form);
      console.log(this.user);
      if (this.user) {
        this.$router.push("/");
      }
    },
    handleMouseEnter(e) {
      // this.$emit("mouseenter");
      // this.icon = "#12B7F5";
      this[e.match(this.patt)[0]] = "#12B7F5";
      console.log(this[e.match(this.patt)[0]]);
    },
    handleMouseLeave(e) {
      // this.$emit("mouseleave");
      // this.icon = "#bdc3c7";
      this[e.match(this.patt)[0]] = "#bdc3c7";
    },
    handleIconClick() {
      // this.$emit("click");
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.login-container {
  // box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  // padding: 50px;
  background-color: @clouds;
  .box {
    // margin: 50px;
    width: calc(100% - 600px);
    height: calc(100% - 300px);
    max-width: 1740px;
    min-width: 700px;
    max-height: 777px;
    min-height: 400px;
    background-color: #fff;
    display: flex;
    // justify-content: center;
    // align-items: center;
    .login-icon {
      width: 30%;
      background-color: @base-color;
    }
    .login {
      width: 70%;
      min-width: 400px;
      min-height: 300px;
      display: flex;
      justify-content: center;
      align-items: center;
      .login-form {
        width: 400px;
        height: 300px;
        background-color: @clouds;
        border-radius: 10px;
        padding: 40px;
        display: flex;
        flex-wrap: wrap;
        // align-content: flex-start;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        .form-grop {
          width: 100%;
          position: relative;
          margin-bottom: 25px;
          input {
            box-sizing: border-box;
            font-size: 1rem;
            width: 100%;
            height: 40px;
            // color: @base-color;
            padding: 0.375rem 0.75rem;
            border-radius: 5px;
            // outline: none;
            border: 1px solid @silver;
            &:focus {
              border: 2px solid @base-color;
            }
          }
          .icon-container {
            position: absolute;
            top: 50%;
            transform: translate(-120%, -50%);
            float: left;
          }
        }
        .form-btn {
          width: 100%;
          margin-top: auto;
          margin-bottom: 20px;
          // align-self: flex-end;
          button {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: none;
            color: @clouds;
            background-color: @base-color;
          }
        }
        .third {
          width: 100%;
          height: 30px;
          padding-top: 4px;
          margin-top: 4px;
          border-top: 1px solid @silver;
          display: flex;
          justify-content: center;
          .icon-container {
            margin: 0 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>