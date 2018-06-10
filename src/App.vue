<template>
  <div id="app">
    <!-- ナビバー -->
    <header-component></header-component>

    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    'header-component': Header
  }
};
</script>

<style lang="scss">
$primary: #ff9097 !default;
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
