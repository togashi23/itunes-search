<template>
  <div class="input-group mb-3">
    <input type="text" class="form-control" v-model="term" @keydown.13="search">
    <div class="input-group-append">
      <button class="btn btn-outline-primary" type="button" @click.prevent="search">検索</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchTerm',
  props: {
    parentTerm: {
      type: String
    }
  },
  data: function() {
    return {
      term: this.parentTerm
    };
  },
  methods: {
    search: function() {
      this.$emit('search');
    }
  },
  watch: {
    term: function() {
      this.$emit('set-term', this.term);
    }
  }
};
</script>
