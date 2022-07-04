<template>
  <div class="my-contrib-container">
    <div class="list">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="序号" width="100" align="center">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>

      <el-table-column
        prop="article_sh_title"
        label="文章名称"
        width="180"
        align="center"
      >
      </el-table-column>

      <el-table-column prop="article_sh_descrip" label="文章描述">
      </el-table-column>

      <el-table-column
        prop="article_sh_createtime"
        label="创建日期"
        width="180"
      >
      </el-table-column>
    </el-table>

    <el-pagination
      background
      style="margin-top: 20px"
      layout="prev, pager, next"
      :total="total"
      :page-size="limit"
      :current-page="page"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getMyContrib } from "@/api/contrib.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      options: [
        { value: "1", label: "未发布" },
        { value: "2", label: "已发布" },
      ],
      value: "1",
      tableData: [],
      page: 1, //当前页码
      limit: 10, //页容量
      total: 0, //数据总条数
      pagerCurrentPage: 1, // 分页栏当前页码
    };
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  created() {
    this.fetchData();
    console.log(1);
  },
  methods: {
    async fetchData() {
      let resp;
      if (this.value === "1") {
        resp = await getMyContrib(this.user.user_id, this.page, this.limit);
      } else if (this.value === "2") {
        resp = await getMyContrib(2, 1, 10);
      }
      console.log(resp);
      this.tableData = resp.rows;
      this.total = +resp.total;
      // console.log(resp);
    },
    handleCurrentChange(page) {
      // console.log(page);
      this.page = page;
      this.fetchData();
    },
    handlePrevClick() {
      this.page -= 1;
      this.fetchData();
    },
    handleNextClick() {
      this.page += 1;
      this.fetchData();
    },
  },
};
</script>

<style lang="less" scoped>
.my-contrib-container {
  padding: 20px;
  .list {
    margin-bottom: 5px;
  }
}
</style>