<template>
  <div class="inf-container">
    <!-- 用户昵称 -->
    <div class="user">
      <div class="text">用户名：</div>
      <el-input
        v-model="form.name"
        :disabled="disabled"
        placeholder="请输入内容"
        class="input"
      ></el-input>
    </div>
    <!-- 电话号码 -->
    <div class="user">
      <div class="text">手机：</div>
      <el-input
        v-model="form.phone"
        placeholder="请输入内容"
        :disabled="disabled"
        class="input"
      ></el-input>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
      },
      disabled: true,
    };
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  created: function () {
    this.setForm();
  },
  methods: {
    setForm() {
      // console.log(this.user);
      if (this.user) {
        // console.log(this.user);
        this.form.name = this.user.username;
        this.form.phone = this.user.user_cellphone;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.inf-container {
  padding: 50px;
  div {
    margin-bottom: 20px;
    width: 400px;
    .text {
      margin: 10px 0;
      font-size: 20px;
      font-weight: bold;
      color: #444;
    }
  }
}
</style>