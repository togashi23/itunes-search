<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between">
    <a class="navbar-brand" href="#">
      <i class="fab fa-itunes fa-fw"></i>iTunes Search</a>
    <span class="navbar-text text-white" v-if="total">{{ total|number-format }}件</span>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    total: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
nav {
  margin-bottom: 1em;
}
</style>
