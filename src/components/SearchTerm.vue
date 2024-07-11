<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="term" @keydown.13="search" v-focus />
    <div class="input-group-append">
      <button class="btn btn-outline-primary" type="button" @click.prevent="search">検索</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchTerm',
  methods: {
    search: function () {
      this.$emit('search');
    },
  },
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
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
};
</script>
