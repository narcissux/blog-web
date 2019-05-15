<template>
  <q-layout view="lHh Lpr lff">
    <q-layout-header>
      <q-toolbar
        color="primary"
        text-color="pink-13"
        inverted

      >
        <q-toolbar-title>
          <div @click="home" style="cursor:default">
            夏夜的博客
            <div slot="subtitle">Narcissu</div>
          </div>
        </q-toolbar-title>

        <div class="gt-xs">
          <q-btn flat class="q-mr-md">学习笔记</q-btn>
          <q-btn flat class="q-mr-md">实用教程</q-btn>
          <q-btn flat class="q-mr-md">资源分享</q-btn>
          <q-btn flat class="q-mr-md">登入</q-btn>
          <q-btn flat class="q-mr-md">註冊</q-btn>
        </div>
        <div class="lt-sm">
          <q-btn icon="fas fa-bars" flat @click="rightDrawerOpen = true"/>
        </div>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="rightDrawerOpen"
      content-class="bg-grey-10"
      side="right"
    >
      <q-list
        no-border
        link
        inset-delimiter
        dark
      >
        <q-list-header>夏夜的博客</q-list-header>
        <q-item>
          <q-item-side icon="fas fa-search-location"/>
          <q-item-main label="学习笔记"/>
        </q-item>
        <q-item>
          <q-item-side icon="fas fa-map-marked-alt"/>
          <q-item-main label="实用教程"/>
        </q-item>
        <q-item>
          <q-item-side icon="fas fa-utensils"/>
          <q-item-main label="资源分享"/>
        </q-item>
        <q-item>
          <q-item-side icon="fas fa-sign-in-alt"/>
          <q-item-main label="登入"/>
        </q-item>
        <q-item>
          <q-item-side icon="far fa-edit"/>
          <q-item-main label="註冊" sublabel="忘記密碼？"/>
        </q-item>

      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      rightDrawerOpen: false
    }
  },
  methods: {
    home () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
