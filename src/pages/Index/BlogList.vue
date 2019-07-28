<template>
  <div class=" section-card q-ma-sm">
    <q-modal v-model="addSwitch" content-css="height:100%;width: 95%">
      <q-modal-layout>
        <q-toolbar slot="header" color="primary"
                   text-color="pink-13"
                   inverted>
          <q-btn
            flat
            round
            dense
            @click="addSwitch = false"
            icon="reply"
          />
          <q-toolbar-title>
            编写笔记
          </q-toolbar-title>
          <q-btn flat class="q-mr-md" @click="createBlog">保存</q-btn>
        </q-toolbar>
      <q-field style="width:90%"
        error-label="Oops, we got an error."
        warning-label="Hey, we got a warning."
      >
        <q-input v-model="title"  stack-label="标题" color="pink-13"/>
        <q-select v-model="category" :options="categorySelect" stack-label="分类" color="pink-13"/>
        <q-chips-input v-model="tags"  stack-label="标签" color="pink-13"/>
      </q-field>
        <no-ssr>
        <mavon-editor style="height:100%;width: 100%"
                      codeStyle='tomorrow-night-eighties'
                      v-model="content"
        ></mavon-editor>
        </no-ssr>

      </q-modal-layout>
    </q-modal>
    <div class="col-12 q-pa-sm"><b class="title">最近的笔记</b></div>
    <q-list highlight no-border>
      <q-item separator v-show="false"/>
      <q-item v-for="(article,index) in list" :key="index" separator class="shadow-1" :to="`blog/${article.id}`">
        <q-item-main
          :label="article.title"
          label-lines="1"
          sublabel-lines
          dense
        >
          <div class="wrap">
            <div class="text">
             {{article.content}}
            </div>
          </div>
          <q-item-tile stamp style="margin-bottom:0px">
            <span class="q-mr-sm text-pink-13"> {{article.updateTime}}</span>
            <span class="q-mr-sm text-pink-13"> 3评论</span>
            <span class="q-mr-sm text-pink-13"> 1k浏览</span>
          </q-item-tile>
        </q-item-main>
      </q-item>
      <q-pagination
        input
        v-model="page"
        :min="1"
        :max="6"
      />
      <q-btn
        round
        color="pink-13"
        @click="addBlog"
        class="fixed gt-md"
        icon="add"
        style="right: 120px; bottom: 160px"
        title="添加笔记"
      />
      <q-btn
        round
        color="pink-13"
        @click="addBlog"
        class="fixed lt-lg"
        icon="add"
        style="right: 18px; bottom: 25px"
        title="添加笔记"
      />
    </q-list>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import 'mavon-editor/dist/css/index.css'
import request from 'src/consts/api/interface'
export default {
  preFetch ({ store, currentRoute, previousRoute, redirect, ssrContext }) {
  },
  components: {
  },
  data () {
    return {
      addSwitch: false,
      title: '',
      tags: [],
      category: '',
      content: '',
      author: '',
      categorySelect: [],
      page: ''
    }
  },
  computed: {
    ...mapState({
      list: state => state.blogServer.blogList
    }),
    ...mapGetters({})
  },
  methods: {
    async addBlog () {
      this.categorySelect = []
      this.addSwitch = true
      let response = await request().categoryRequst.list()
      for (let obj of response.data.data) {
        this.categorySelect.push({ label: obj.name, value: obj.id })
      }
    },
    createBlog () {
      this.addSwitch = false
      this.$store.dispatch('blogServer/createBlog', { title: this.title, tags: this.tags, categoryId: this.category, content: this.content, userId: 1008 })
    }
  },
  created () {
    this.$store.dispatch('blogServer/listBlog', { page: 1, size: 10 })
  }
}
</script>

<style lang="stylus">
  .section-card
    margin-right 10%
    margin-left 10%

    .title
      font-size 24px

    .q-card-title
      font-size 16px
      line-height 24px

    .q-card-media
      max-height 200px

    .q-item
      height 90px
      border-radius 3px
      cursor pointer
      color black
      margin-top 10px
      padding-top: 2px
      padding-bottom: 2px
  .wrap {
    height: 40px;
    line-height: 20px;
    overflow: hidden;
  }
  .wrap .text {
    float: right;
    height: 40px;
    margin-left: -5px;
    width: 100%;
    word-break: break-all;
  }
  .wrap::after {
    float: bottom-r ;
    content: "...";
    height: 20px;
    line-height: 20px;
    /* 为三个省略号的宽度 */
    width: 3em;
    /* 使盒子不占位置 */
    margin-left: -3em;
    /* 移动省略号位置 */
    position: relative;
    left: 100%;
    top: -20px;
    padding-right: 5px;
    text-align:right;
  }
</style>
