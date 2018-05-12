<template>
  <!-- ロード画面 -->
  <div class="loading">
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 100%"></div>
    </div>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'Loading'
};
</script>

<style scoped>
.loading {
  margin-top: 10em;
  text-align: center;
}
</style>
