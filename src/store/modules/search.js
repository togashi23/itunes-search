import itunesApi from '@/itunesApi.js';

/** 最大取得件数 */
const LIMIT = 200;

export default {
  namespaced: true,
  state: {
    country: 'jp',
    term: '',
    itunesItem: [],
    collectionId: 0,
    selectAlbum: [],
    albumItem: [],
    isMore: false,
  },
  getters: {
    /**
     * 検索結果の件数を算出
     *
     * @param {object} state Vuexの状態
     * @return {number} 検索結果の件数
     */
    total: function (state) {
      return state.itunesItem.length;
    },
  },
  mutations: {
    /**
     * ストアのリージョンを設定
     *
     * @param {object} state Vuexの状態
     * @param {string} country リージョン
     */
    setCountry(state, country) {
      state.country = country;
    },
    /**
     * 検索クエリを設定
     *
     * @param {object} state Vuexの状態
     * @param {string} term 検索クエリ
     */
    setTerm(state, term) {
      state.term = term;
    },
    /**
     * アルバムリストを設定
     *
     * @param {object} state Vuexの状態
     * @param {Array} value アルバムリスト
     */
    setItunesItem(state, value) {
      state.itunesItem = value;
    },
    /**
     * collectionIDを設定
     *
     * @param {object} state Vuexの状態
     * @param {number} id collectionID
     */
    setCollectionId(state, id) {
      state.collectionId = id;
    },
    /**
     * アルバム情報を設定
     *
     * @param {object} state Vuexの状態
     * @param {object} value アルバム情報
     */
    setAlbumItem(state, { selectAlbum, albumItem }) {
      state.selectAlbum = selectAlbum;
      state.albumItem = albumItem;
    },
    /**
     * moreが存在するかを設定
     * @param {object} state Vuexの状態
     * @param {bool} more 次も存在するか
     */
    setIsMore(state, more) {
      state.isMore = Boolean(more);
    },
  },
  actions: {
    /**
     * 検索メソッド
     */
    search(context) {
      context.commit('state/setLoading', true, { root: true });
      itunesApi
        .getAlbums(
          {
            term: context.state.term,
            country: context.state.country,
          },
          LIMIT,
        )
        .then((response) => {
          if (response.resultCount === LIMIT) {
            context.commit('setIsMore', true);
          } else {
            context.commit('setIsMore', false);
          }
          context.commit('setItunesItem', response.results);
          context.commit('state/setLoading', false, { root: true });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    /**
     * 追加検索
     */
    moreSearch(context) {
      itunesApi
        .getAlbums(
          {
            term: context.state.term,
            country: context.state.country,
          },
          LIMIT,
          context.getters.total,
        )
        .then((response) => {
          if (response.resultCount === LIMIT) {
            context.commit('setIsMore', true);
          } else {
            context.commit('setIsMore', false);
          }
          context.commit('setItunesItem', [...context.state.itunesItem, ...response.results]);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    /**
     * アルバムを検索
     */
    searchAlbum(context) {
      context.commit('state/setLoading', true, { root: true });
      itunesApi
        .getSongs({
          id: context.state.collectionId,
          country: context.state.country,
        })
        .then((response) => {
          let selectAlbum = [];
          let albumItem = [];

          response.results.forEach((item) => {
            if (item.wrapperType === 'collection') {
              selectAlbum = item;
            } else if (item.wrapperType === 'track') {
              albumItem.push(item);
            }
          });
          context.commit('setAlbumItem', { selectAlbum, albumItem });
          context.commit('state/setLoading', false, { root: true });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
