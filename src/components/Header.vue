<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between">
    <a class="navbar-brand" href="#">
      <font-awesome-icon :icon="['fab', 'itunes']" /> iTunes Search</a>
    <span class="navbar-text text-white" v-if="total">{{ total|number-format }}件</span>
  </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  components: {
    FontAwesomeIcon
  },
  computed: {
    ...mapGetters({
      total: 'search/total'
    })
  }
};
</script>

<style scoped>
nav {
  margin-bottom: 1em;
}
</style>
