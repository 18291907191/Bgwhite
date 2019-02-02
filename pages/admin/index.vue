<template>
  <section class="wraper">
    <el-form ref="form" :model="form" label-width="86px">
    <!--S 标题 -->
      <admin-title :title="title.tit1"></admin-title>
      <el-form-item label="Article Title">
        <el-col :span="6">
          <el-input v-model="form.title"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="Title Image">
        <el-col :span="6">
          <el-input v-model="form.title_img"></el-input>
        </el-col>
      </el-form-item>
      <admin-title :title="title.tit2"></admin-title>
      <el-form-item label="Article Tags">
        <el-col :span="6">
          <el-select
            style="width: 100%;"
            v-model="form.tags"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择文章标签">
            <el-option
              v-for="item in tagList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <admin-title :title="title.tit3"></admin-title>
      <el-form-item label="Abstract">
        <textarea class="abstract" v-bind:maxlength="190" v-model="form.abstract" rows="5" cols="100" type="text" name="abstract">
        </textarea>
        <span style="font-size:16px;"><font style="color: #3576e0;">{{190 - form.abstract.length}}</font>/190</span>
      </el-form-item>
      <el-form-item label="Content">
        <el-col>
          <no-ssr><mavon-editor class="markdown" :toolbars="markdownOption" v-model="handbook"/></no-ssr>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col>
          <el-button type="primary" @click.native="submit">确认发布</el-button>
          <el-button type="primary" @click.native="saveDraft" :loading="draftLoading">保存草稿</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import AdminTitle  from '@/components/admin/Title';
import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    AdminTitle,
  },
  watch: {
    'form.abstract'(curVal, oldVal) {
      if (curVal.length > this.textNum) {
        this.textareaValue = String(curVal).slice(0, this.textNum);
      }
    }
  },
  data() {
    return {
      title: {
        tit1: '文章标题',
        tit2: '文章标签',
        tit3: '文章摘要',
      }, //标题
      form: {
        title: '',
        tags: [],
        title_img:'',
        abstract: '',
        content: '',
        status: 1,
      }, //提交数据
      tagList: [
        {label: 'vue.js',value: 'vue.js'},
        {label: 'nuxt.js',value:'nuxt.js'},
        {label:'node.js',value:'node.js'}
      ], //标签选择器
      textNum: 200,
      markdownOption:{
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true, // 预览
      }, //markdown配置
      handbook:"",
      draftLoading: false,
    }
  },
  methods: {
    submit() {
      let articleContent = document.querySelector('.v-show-content');
      this.form.content = articleContent.innerHTML;
      console.log(this.form);
      axios.postJson('/article/api/v1/addArticle',this.form)
      .then(res => {
        console.log(res);
      })
    },
    saveDraft() {
      this.draftLoading = true;
    }
  }
}
</script>
<style lang="less" scoped>
.wraper {
  width: 100%;
  height: 100%;
  .abstract {
    padding: 10px;
    font-size: 14px;
  }
  .markdown {
    width: 100%;
    height: 100%;
  }
}

</style>
