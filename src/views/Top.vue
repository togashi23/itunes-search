<template>
  <div>
    <div class="container-fluid">
      <!-- 検索部分 -->
      <div class="row">
        <div class="col-xl-12 col-md-4">
          <search-countly-component />
        </div>
        <div class="col-xl-12 col-md-8">
          <search-term-component @search="search" />
        </div>
      </div>

      <!-- 表示方法選択 -->
      <div class="d-flex justify-content-end mb-3">
        <div class="btn-group">
          <label
            class="btn btn-outline-primary"
            :class="[viewType === 'grid' ? 'active' : '']"
            @click="setView('grid')"
          >
            <i class="fas fa-th-large"></i>
          </label>
          <label
            class="btn btn-outline-primary"
            :class="[viewType === 'list' ? 'active' : '']"
            @click="setView('list')"
          >
            <i class="fas fa-list"></i>
          </label>
        </div>
      </div>

      <!-- 結果表示 -->
      <template v-if="loading">
        <!-- ロード中 -->
        <loading-component />
      </template>
      <template v-else>
        <!-- カード表示 -->
        <result-cards-component v-if="!loading && total && viewType === 'grid'" />
        <!-- リスト表示 -->
        <result-lists-component v-else-if="!loading && total && viewType === 'list'" />
        <!-- 結果0件 -->
        <result-none-component v-else />
        <!-- 追加検索ボタン -->
        <button v-show="isMore" type="button" class="btn btn-outline-primary btn-lg w-100 mb-3" @click="moreSearch">
          more
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapStores } from 'pinia';
import SearchCountry from '@/components/SearchCountry.vue';
import SearchTerm from '@/components/SearchTerm.vue';
import ResultCards from '@/components/ResultCards.vue';
import ResultLists from '@/components/ResultLists.vue';
import ResultNone from '@/components/ResultNone.vue';
import Loading from '@/components/Loading.vue';
import { useSearchStore } from '@/store/search';
import { useStateStore } from '@/store/state';

export default {
  name: 'Top',
  components: {
    'search-countly-component': SearchCountry,
    'search-term-component': SearchTerm,
    'result-none-component': ResultNone,
    'result-cards-component': ResultCards,
    'result-lists-component': ResultLists,
    'loading-component': Loading,
  },
  mounted: function () {
    if (this.$route.query.term !== undefined && this.$route.query.term !== '') {
      this.searchStore.term = this.$route.query.term;
      this.search();
    }
  },
  methods: {
    /**
     * 検索メソッド
     */
    search() {
      this.$router.push({ query: { term: this.searchStore.term } });
      this.searchStore.search();
    },
    /**
     * 追加検索
     */
    moreSearch() {
      this.searchStore.moreSearch();
    },
    /**
     * 結果表示タイプを設定
     *
     * @param {string} view 表示タイプ
     */
    setView(view) {
      this.stateStore.viewType = view;
    },
  },
  computed: {
    ...mapStores(useSearchStore, useStateStore),
    ...mapState(useStateStore, ['viewType', 'loading']),
    ...mapState(useSearchStore, ['itunesItem', 'isMore', 'total']),
  },
};
</script>
