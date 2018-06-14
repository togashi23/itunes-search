<template>
  <div>
    <div class="container-fluid">
      <!-- 検索部分 -->
      <div class="row">
        <div class="col-xl-12 col-md-4">
          <search-countly-component></search-countly-component>
        </div>
        <div class="col-xl-12 col-md-8">
          <search-term-component @search="search"></search-term-component>
        </div>
      </div>

      <!-- 結果表示 -->
      <div class="d-flex justify-content-end mb-3">
        <div class="btn-group btn-group-toggle">
          <label class="btn btn-outline-primary" :class="[ viewType === 'grid' ? 'active' : '' ]" @click="setView('grid')">
            <font-awesome-icon icon="th-large" />
          </label>
          <label class="btn btn-outline-primary" :class="[ viewType === 'list' ? 'active' : '' ]" @click="setView('list')">
            <font-awesome-icon icon="list" />
          </label>
        </div>
      </div>

      <result-cards-component v-if="!loading && total && viewType === 'grid'"></result-cards-component>
      <result-lists-component v-else-if="!loading && total && viewType === 'list'"></result-lists-component>

      <result-none-component v-else-if="!loading"></result-none-component>
      <loading-component v-if="loading"></loading-component>
    </div>
  </div>
</template>

<script>
import SearchCountry from '@/components/SearchCountry.vue';
import SearchTerm from '@/components/SearchTerm.vue';
import ResultCards from '@/components/ResultCards.vue';
import ResultLists from '@/components/ResultLists.vue';
import ResultNone from '@/components/ResultNone.vue';
import Loading from '@/components/Loading.vue';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Top',
  components: {
    FontAwesomeIcon,
    'search-countly-component': SearchCountry,
    'search-term-component': SearchTerm,
    'result-none-component': ResultNone,
    'result-cards-component': ResultCards,
    'result-lists-component': ResultLists,
    'loading-component': Loading
  },
  mounted: function() {
    if (this.$route.query.term !== undefined && this.$route.query.term !== '') {
      this.$store.commit('search/setTerm', this.$route.query.term);
      this.search();
    }
  },
  methods: {
    /**
     * 検索メソッド
     */
    search() {
      this.$router.push({ query: { term: this.$store.state.search.term } });
      this.$store.dispatch('search/search');
    },
    /**
     * 結果表示タイプを設定
     *
     * @param {string} view 表示タイプ
     */
    setView(view) {
      this.$store.commit('state/setViewType', view);
    }
  },
  computed: {
    ...mapState({
      viewType: state => state.state.viewType,
      loading: state => state.state.loading,
      itunesItem: state => state.search.itunesItem
    }),
    ...mapGetters({
      total: 'search/total'
    })
  }
};
</script>
