import itunesApi from '@/itunesApi.js';

export default {
  namespaced: true,
  state: {
    country: 'jp',
    term: '',
    itunesItem: []
  },
  getters: {
    /**
     * 検索結果の件数を算出
     *
     * @param {String} state Vuexの状態
     * @return {number} 検索結果の件数
     */
    total: function(state) {
      return state.itunesItem.length;
    }
  },
  mutations: {
    /**
     * ストアのリージョンを設定
     *
     * @param {String} state Vuexの状態
     * @param {String} country リージョン
     */
    setCountry(state, country) {
      state.country = country;
    },
    /**
     * 検索クエリを設定
     *
     * @param {String} state Vuexの状態
     * @param {String} term 検索クエリ
     */
    setTerm(state, term) {
      state.term = term;
    },
    setItunesItem(state, value) {
      state.itunesItem = value;
    }
  },
  actions: {
    /**
     * 検索メソッド
     */
    search() {
      this.commit('state/setLoading', true);
      itunesApi
        .getAlbums({
          term: this.state.search.term,
          country: this.state.search.country
        })
        .then(response => {
          this.commit('search/setItunesItem', response.results);
          this.commit('state/setLoading', false);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
