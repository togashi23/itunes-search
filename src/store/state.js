import { defineStore } from 'pinia';

export const useStateStore = defineStore('state', {
  state: () => ({
    /** ロード中か */
    loading: false,
    /** 結果表示タイプ */
    viewType: 'grid',
  }),
});
