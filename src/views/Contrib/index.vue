<template>
  <div class="contrib-container">
    <div class="max">
      <!-- 文章标题 -->
      <div class="title">
        <h2>文章标题</h2>
        <input type="text" name="" id="" v-model="form.title" class="input" />
      </div>
      <!-- 文章图片 -->
      <div class="img">
        <h2>文章头图</h2>
        <el-upload
          class="avatar-uploader"
          action="http://localhost:80/api/api/upload_pic.php"
          :show-file-list="false"
          :on-success="upLoadSuccess"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <!-- <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog> -->
      </div>
      <!-- 文章描述 -->
      <div class="descrpition">
        <h2>文章描述</h2>
        <textarea rows="5" class="input" v-model="form.descrpition" />
      </div>
      <!-- 文章内容 -->
      <div class="content">
        <h2>文章内容</h2>
        <Editor height="800px" :initialValue="form.editorText" ref="editor" />
      </div>
      <div class="submit">
        <button @click="handleClick" :disabled="isSubmit">
          {{ isSubmit ? "提交中" : "提交" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor } from "@toast-ui/vue-editor";
import { subContrib } from "@/api/contrib";
import { mapState } from "vuex";
export default {
  components: {
    Editor,
  },
  data() {
    return {
      form: {
        title: "",
        img: "",
        descrpition: "",
        editorText: "",
      },
      //是否在提交中
      isSubmit: false,
      imageUrl: "",
    };
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  methods: {
    async handleClick() {
      // console.log("1");
      const data = {
        ...this.form,
        content: this.$refs.editor.invoke("getHTML"),
        id: this.user.user_id,
      };
      console.log(data);
      this.isSubmit = true;
      const resp = await subContrib(data);
      console.log(resp);
      this.isSubmit = false;
      if (resp) {
        this.$message({
          message: "提交成功，请等待管理员审核",
          type: "success",
        });
        for (const key in this.form) {
          this.form.key = "";
        }
      } else {
        this.$message.error("提交失败");
      }
    },
    upLoadSuccess(res) {
      if (res.code === 0) {
        this.form.img = res.data;
        this.imageUrl = res.data;
      } else {
        this.$message.error(res.msg);
      }
      console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/style/var.less";
.contrib-container {
  padding: 20px 40px;
  // background-color: #fff;
  .max {
    width: calc(100% - 40px);
    padding: 20px;
    background-color: #fff;
  }
  .submit {
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      background-color: @base-color;
      color: @clouds;
      width: 150px;
      height: 50px;
      letter-spacing: 5px;
      font-size: 20px;
      font-weight: 800;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      &:disabled {
        opacity: 0.5; //设置蒙版效果
        // pointer-events: none; //禁止鼠标事件
        cursor: not-allowed;
      }
    }
  }
}
.input {
  width: 100%;
  color: @gray;
  // background-color: @clouds;
  border: 1px solid #dadde6;
  font-size: 20px;
  text-indent: 10px;
  border-radius: 4px;
  padding: 5px 0;
}
input {
  outline: none;
}

textarea {
  resize: none;
}

h2 {
  margin: 10px 0;
  color: @base-color;
}

//按钮提交中的状态
</style>