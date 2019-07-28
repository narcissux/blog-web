<template>
  <div class=" section-card q-ma-sm">
    <header>
      <h4 class=" title4">{{article.title}} </h4>
      <div class="row justify-between addition" >
        <div class="row items-center">
        <span class="q-mr-sm text-pink-13"> {{article.updateTime}}</span>
        <span class="q-mr-sm text-pink-13"> 3评论</span>
        <span class="q-mr-sm text-pink-13" > 1k浏览</span>
        </div>
        <div>
        <q-btn outline color="pink-13" :label="setButtonLable" @click="edit"/>
        </div>
      </div>
    </header>
    <no-ssr>
    <mavon-editor v-model="article.content"
                  :subfield="subfield"
                  :defaultOpen="defaultOpen"
                  :toolbarsFlag="toolbarsFlag"
                  :scrollStyle="scrollStyle"
                  :codeStyle="codeStyle"
                  :navigation="navigation" style="height:1000px"></mavon-editor>
    </no-ssr>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import 'mavon-editor/dist/css/index.css'
import request from 'src/consts/api/interface'

export default {
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
  },
  data: () => ({
    value: '',
    subfield: false, // 单双栏模式
    defaultOpen: 'preview', // edit： 默认展示编辑区域 ， preview： 默认展示预览区域
    editable: false,
    toolbarsFlag: false,
    scrollStyle: true,
    navigation: false,
    codeStyle: 'tomorrow-night-eighties',
    isEdit: false,
    article: {}
  }),
  computed: {
    ...mapState({
      // article: state =>  await request(token).blogRequest.retrieve(params)
    }),
    ...mapGetters({

    }),
    setButtonLable () {
      return this.isEdit ? '保存' : '编辑'
    }
  },
  methods: {
    edit () {
      this.subfield = !this.subfield
      this.toolbarsFlag = !this.toolbarsFlag
      this.isEdit = !this.isEdit
      if (!this.isEdit) {
        this.$store.dispatch('blogServer/updateBlog', { content: this.article.content, id: this.article.id })
      }
    }
  },
  created () {
  },
  mounted () {
    request().blogRequest.retrieve({ uuid: this.$router.currentRoute.params.blogid })
      .then(resp => {
        console.log(this.article)
        this.article = Object.assign({}, this.article, resp.data.data)
        console.log(this.article)
      }).catch(err => { console.log(err) })
  }
}
</script>

<style lang="stylus">
  .section-card
    margin-right 5%
    margin-left 5%

  .title4
    font-size 24px
    margin-bottom 0%
    margin-top 0.1%
  .addition
    margin-bottom 0.2%
</style>
