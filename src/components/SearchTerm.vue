<template>
  <div class="input-group mb-3">
    <input v-model="term" v-focus type="text" class="form-control" @keydown.enter="search" />
    <button class="btn btn-outline-primary" type="button" @click.prevent="search">検索</button>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia';
import { useSearchStore } from '@/store/search';

export default {
  name: 'SearchTerm',
  directives: {
    focus: {
      mounted: function (el) {
        el.focus();
      },
    },
  },
  emits: ['search'],
  computed: {
    ...mapWritableState(useSearchStore, ['term']),
  },
  methods: {
    search: function () {
      this.$emit('search');
    },
  },
};
</script>
