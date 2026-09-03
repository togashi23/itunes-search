<template>
  <div class="input-group mb-3">
    <input v-model="term" v-focus type="text" class="form-control" @keydown.enter="search" />
    <div class="input-group-append">
      <button class="btn btn-outline-primary" type="button" @click.prevent="search">検索</button>
    </div>
  </div>
</template>

<script>
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
    term: {
      get() {
        return this.$store.state.search.term;
      },
      set(value) {
        this.$store.commit('search/setTerm', value);
      },
    },
  },
  methods: {
    search: function () {
      this.$emit('search');
    },
  },
};
</script>
