<script setup lang="ts">
  import { createFromIconfontCN } from '@ant-design/icons-vue';

  const AliIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3295861_9autcxth94f.js',
  });
</script>

<template>
  <h1>Playground</h1>
  <ali-icon type="icon-ceshi" />
  <div class="css-icon"></div>
</template>

<style>
  /* @import '//at.alicdn.com/t/font_3295861_9autcxth94f.css'; */

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .css-icon {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    background: #ddd;
  }

  .css-icon::before {
    display: block;
    content: 'sdkl';
    font-family: iconfont;
    content: '\e8ad';
  }
</style>
