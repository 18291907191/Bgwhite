<template>
  <div class="wraper">
    <el-row class="hd" :gutter="20" type="flex" align="middle">
      <el-col :span="7">
        <el-input placeholder="请输入文章标题" v-model="form.title" @blur="search">
          <el-button @click="search" slot="append">搜索</el-button>
        </el-input>
      </el-col>
      <el-col class="tr">
        <el-button type="primary" @click="increase">新增</el-button>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      stripe
      fit
      height="100%"
      class="content">
      <el-table-column
        align="center"
        prop="id"
        label="编号"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="title"
        label="标题"
        width="200">
      </el-table-column>
      <el-table-column
        prop="status"
        align="center"
        label="发布状态"
        width="200">
      </el-table-column>
      <el-table-column
        prop="comment"
        align="center"
        label="评论数"
        width="200">
      </el-table-column>
      <el-table-column
        prop="reader_number"
        align="center"
        label="阅读数"
        width="200">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEditor(scope.row)" type="primary" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row class="footer">
      <el-pagination
        class="pagination"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    layout: 'admin',
    data() {
      return {
        searchContent: '', //搜索内容
        tableData: [],
        form: {
          tag: '',
          title: '',
        },
        status: {
          '1':'已发布',
          '-1':'待发布'
        }
      }
    },
    methods: {
      // 搜索内容
      search() {
        this.getData();
      },
      // 查看元素
      handleEditor(row) {
        this.$router.push({
          name: 'admin-article-title',
          params: {title: row.title}
        })
      },
      // 删除文章
      handleDelete(row) {
        this.$confirm('此操作将删除该文章信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( () => {
          axios.post('/article/api/v1/deleteArticle',{id:row.id})
          .then(res => {
            if(res == null) {
              this.getData();
            }
          })
        }).catch( () => {
          return
        })
      },
      // 获取列表数据
      getData() {
        axios.get('/article/api/v1/list',this.form)
        .then(res => {
          if(!res) {
            return false;
          }
          this.tableData = res.map(item => {
            item.comment = item.comment ? item.comment : '0';
            item.title = item.title ? item.title : '---';
            item.status = this.status[item.status];
            item.reader_number = item.reader_number ? item.reader_number : '0';
            return item;
          })
        })
      },
      // 新增文章
      increase() {
        this.$router.push({
          name: 'admin-article-title',
          params: {title: 'increase'}
        })
      }
    },
    created() {
      this.getData();
    }
  }
</script>
<style lang="less" scoped>
.wraper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .hd {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between
  }
  .content {
    width: 100%;
    flex: 1;
    overflow: auto;
    /deep/.el-table td {
      border-bottom: 0;
    }
  }
  .footer {
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .pagination {
      align-self: flex-end;
    }
  }
}
</style>
