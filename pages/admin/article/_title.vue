<template>
  <section class="wraper">
    <el-form ref="form" :model="form" label-width="92px" :rules="rules">
    <!--S 标题 -->
      <admin-title :title="title.tit1"></admin-title>
      <el-form-item label="Article Title" prop="title">
        <el-col :span="6">
          <el-input v-model="form.title"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="Title Image" prop="title_img"
      >
        <el-col :span="6">
          <el-input v-model="form.title_img"></el-input>
        </el-col>
      </el-form-item>
      <admin-title :title="title.tit2"></admin-title>
      <el-form-item label="Article Tags" prop="tags">
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
              :key="item.id"
              :label="item.tag"
              :value="item.id">
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <admin-title :title="title.tit3"></admin-title>
      <el-form-item label="Abstract" prop="abstract">
        <textarea class="abstract" v-bind:maxlength="190" v-model="form.abstract" rows="5" cols="100" type="text" name="abstract">
        </textarea>
        <span style="font-size:16px;"><font style="color: #3576e0;">{{190 - form.abstract.length}}</font>/190</span>
      </el-form-item>
      <el-form-item label="Content" prop="content">
        <el-col class="markdown">
          <el-button class="btn btn-small btn-main" @click="preview = !preview">{{preview ? '编辑' : '预览'}}</el-button>
          <textarea v-model="form.content"></textarea>
          <vue-markdown :markdown="previewMarkdown" v-show="preview"></vue-markdown>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col>
          <el-button type="primary" @click.native="submit('rules')">确认发布</el-button>
          <el-button type="primary" @click.native="saveDraft" :loading="draftLoading">保存草稿</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import AdminTitle  from '@/components/admin/Title';
import axios from 'axios'
import VueMarkdown from '@/components/form/VueMarkdown'

export default {
  layout: 'admin',
  components: {
    AdminTitle,
    VueMarkdown
  },
  watch: {
    'form.abstract'(curVal, oldVal) {
      if (curVal.length > this.textNum) {
        this.textareaValue = String(curVal).slice(0, this.textNum);
      }
    },
    preview() {
      if (this.preview) {
        this.previewMarkdown = this.form.content
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
        title_img: '',
        abstract: '',
        content: '',
        status: 1,
      }, //提交数据
      tagList: [], //标签选择器
      textNum: 200,
      draftLoading: false,
      preview: true,
      previewMarkdown: '',
      rules: {
        title: [
          { required: true, message: '请输入文章标题', trigger: 'blur'},
          { min: 3, max: 10, message: '长度在3-10个字符',trigger: ['change','blur']}
        ],
        title_img: [
          { required: true, message: '请输入标题图片', trigger: 'blur'},
        ],
        tags: [
          { required: true, message: '请选择文章标签', trigger: 'change'},
        ],
        abstract: [
          { required: true, message: '请输入文章摘要', trigger: ['change','blur']},
        ],
        content: [
          { required: true, message: '请输入文章内容', trigger: ['blur','change']},
        ]
      },
      params: {
        title: '',
        tag: ''
      },
    }
  },
  methods: {
    submit() {
      let isOk = this.validata();
      if(!isOk) {
        return ;
      }
      axios.postJson('/article/api/v1/addArticle',this.form)
      .then(res => {
        if(!res) {
          this.$message({
            message: '发布成功',
            type: 'success',
          })
        }
      })
    },
    // 表单校验
    validata() {    
      console.log(this.form);
      let isForm;
      this.$refs.form.validate(valid => {
        isForm = valid;
      });
      if (!isForm) {
        return false;
      }
      return true;
    },
    saveDraft() {
      this.draftLoading = true;
    },
    getData() {
      axios.get('/article/api/v1/list',this.params)
      .then(res => {
        if(!res) {
          return false;
        }
        this.form = res[0];
      })
    },
    getTags() {
      let hash  = {};
      let arr = [];
      axios.get('/article/api/v1/articleTags')
      .then(res => {
        arr = res.reduce((item,next) => {
          hash[next.tag] ? '' : hash[next.tag] = true && item.push(next);
          return item;
        },[]);
        this.tagList = arr;  
      })
    }
  },
  created() {
    this.params.title = this.$route.params.title !== 'increase' ? this.$route.params.title : '';
    console.log(this.params.title);
  },
  mounted() {
    this.getTags();
    if(this.params.title) {
      this.getData();
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
    position: relative;
    width: 100%;
  }
  .markdown .btn {
      box-shadow: 0 0 3px rgba(100, 100, 100, 0.8);
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 100;
      padding: 5px 10px;
  }
  .markdown textarea {
      padding: 5px 15px;
      display: block;
      height: 500px !important;
      width: 100%;
      border: 1px solid #ddd;
      resize: none;
      font-size: 16px;
  }

  .markdown textarea:focus {
      border-color: rgb(51, 204, 250);
  }

  .markdown>div {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      z-index: 99;
      overflow-y: auto;
      background: #f2f2f2;
      transition: width ease cubic-bezier(0.075, 0.82, 0.165, 1);
      padding: 10px 20px;
  }
}

</style>
