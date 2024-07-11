<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between">
    <router-link :to="'/'" class="navbar-brand"> <i class="fab fa-itunes"></i> iTunes Search </router-link>
    <span v-if="total" class="navbar-text text-white">{{ total | (number - format) }}件</span>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      total: 'search/total',
    }),
  },
};
</script>

<style scoped>
nav {
  margin-bottom: 1em;
}
</style>
