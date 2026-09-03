<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <router-link :to="'/'" class="navbar-brand"> <i class="fab fa-itunes"></i> iTunes Search </router-link>
      <span v-if="total" class="navbar-text text-white">{{ numberFormat(total) }}件</span>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'pinia';
import { useSearchStore } from '@/store/search';
import { numberFormat } from '@/util/filters';

export default {
  name: 'HeaderComponent',
  computed: {
    ...mapState(useSearchStore, ['total']),
  },
  methods: {
    numberFormat,
  },
};
</script>

<style scoped>
nav {
  margin-bottom: 1em;
}
</style>
