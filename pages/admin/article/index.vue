<template>
  <div class="wraper">
    <el-row class="hd" :gutter="20" type="flex" align="middle">
      <el-col :span="7">
        <el-input placeholder="请输入文章标题" v-model="searchContent">
          <el-button @click="search" slot="append">搜索</el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      stripe
      fit
      class="content"
      style="width: 100%">
      <el-table-column
        fixed
        align="center"
        prop="title"
        label="标题"
        width="200">
      </el-table-column>
      <el-table-column
        prop="state"
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
        prop="readerNumber"
        align="center"
        label="阅读数"
        width="200">
      </el-table-column>
      <el-table-column
        fixed="right"
        align="center"
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small">查看</el-button>
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="danger" size="small">删除</el-button>
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
  export default {
    layout: 'admin',
    data() {
      return {
        searchContent: '', //搜索内容
        tableData: [
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
          {title: 'nuxt插件盛大交付空间的',state:'1',comment:'4',readerNumber:'1200'},
        ]
      }
    },
    methods: {
      search() {
        console.log(this.searchContent);
      },
      handleClick(row) {
        console.log(row);
      }
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
  }
  .content {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    // overflow: hidden;
    /deep/tbody {
      width: 100%;
      // flex: 1;
      // overflow: auto;
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
