<template>
  <div>
    <!-- ナビバー -->
    <header-component :total="total"></header-component>

    <div class="container-fluid">
      <!-- 検索部分 -->
      <div class="row">
        <div class="col-xl-12 col-md-4">
          <search-countly-component :parentCountry="country" @set-country="setCountry"></search-countly-component>
        </div>
        <div class="col-xl-12 col-md-8">
          <search-term-component :parentTerm="term" @set-term="setTerm" @search="search"></search-term-component>
        </div>
      </div>

      <!-- 結果表示 -->
      <div class="d-flex justify-content-end mb-3">
        <div class="btn-group btn-group-toggle">
          <label class="btn btn-outline-primary" :class="[ viewType === 'grid' ? 'active' : '' ]" @click="setView('grid')">
            <font-awesome-icon icon="th-large"/>
          </label>
          <label class="btn btn-outline-primary" :class="[ viewType === 'list' ? 'active' : '' ]" @click="setView('list')">
            <font-awesome-icon icon="list"/>
          </label>
        </div>
      </div>

      <result-cards-component :itunesItem="itunesItem" v-if="!loading && total && viewType === 'grid'"></result-cards-component>
      <result-lists-component :itunesItem="itunesItem" v-else-if="!loading && total && viewType === 'list'"></result-lists-component>

      <result-none-component v-else-if="!loading"></result-none-component>
      <loading-component v-if="loading"></loading-component>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '@/components/Header.vue';
import SearchCountry from '@/components/SearchCountry.vue';
import SearchTerm from '@/components/SearchTerm.vue';
import ResultCards from '@/components/ResultCards.vue';
import ResultLists from '@/components/ResultLists.vue';
import ResultNone from '@/components/ResultNone.vue';
import Loading from '@/components/Loading.vue';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'Top',
  components: {
    FontAwesomeIcon,
    'header-component': Header,
    'search-countly-component': SearchCountry,
    'search-term-component': SearchTerm,
    'result-none-component': ResultNone,
    'result-cards-component': ResultCards,
    'result-lists-component': ResultLists,
    'loading-component': Loading
  },
  data: function() {
    return {
      apiUrl: 'https://itunes.apple.com/search',
      entity: 'album',
      country: 'jp',
      term: this.$route.query.term,
      loading: false,
      viewType: 'grid',
      itunesItem: []
    };
  },
  mounted: function() {
    if (this.term !== undefined && this.term !== '') this.search();
  },
  methods: {
    /**
     * 検索メソッド
     */
    search() {
      this.$router.push({ query: { term: this.term } });
      this.loading = true;
      axios
        .get(this.apiUrl, {
          params: {
            term: this.term,
            country: this.country,
            entity: this.entity,
            limit: 50
          }
        })
        .then(response => {
          this.itunesItem = response.data.results;
          this.loading = false;
        })
        .catch(error => {
          console.error(error);
        });
    },
    /**
     * ストアのリージョンを設定
     *
     * @param {String} newCountry
     */
    setCountry(newCountry) {
      this.country = newCountry;
    },
    /**
     * 検索クエリを設定
     */
    setTerm(newTerm) {
      this.term = newTerm;
    },
    /**
     * 結果表示タイプを設定
     */
    setView(view) {
      this.viewType = view;
    }
  },
  computed: {
    /**
     * 検索結果の件数を算出
     *
     * @return {number} 検索結果の件数
     */
    total: function() {
      return this.itunesItem.length;
    }
  }
};
</script>
