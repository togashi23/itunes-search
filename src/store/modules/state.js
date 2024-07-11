export default {
  namespaced: true,
  state: {
    loading: false,
    viewType: 'grid',
  },
  getters: {},
  mutations: {
    /**
     * ロード状況を設定
     *
     * @param {object} state Vuexの状態
     * @param {boolean} is ロード中
     */
    setLoading(state, is) {
      state.loading = is;
    },
    /**
     * 結果表示タイプを設定
     *
     * @param {object} state Vuexの状態
     * @param {string} type 表示タイプ
     */
    setViewType(state, type) {
      state.viewType = type;
    },
  },
  actions: {},
};
