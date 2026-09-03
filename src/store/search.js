import { defineStore } from 'pinia';
import itunesApi from '@/itunesApi.js';
import { useStateStore } from '@/store/state';

/** 最大取得件数 */
const LIMIT = 200;

export const useSearchStore = defineStore('search', {
  state: () => ({
    /** リージョン */
    country: 'jp',
    /** 検索クエリ */
    term: '',
    /** アルバムリスト */
    itunesItem: [],
    /** collectionID */
    collectionId: 0,
    /** 選択中のアルバム情報 */
    selectAlbum: [],
    /** 選択中のアルバムのトラックリスト */
    albumItem: [],
    /** 次のページが存在するか */
    isMore: false,
  }),
  getters: {
    /**
     * 検索結果の件数を算出
     *
     * @param {object} state Piniaの状態
     * @return {number} 検索結果の件数
     */
    total: function (state) {
      return state.itunesItem.length;
    },
  },
  actions: {
    /**
     * 検索メソッド
     */
    search() {
      const stateStore = useStateStore();
      stateStore.loading = true;
      itunesApi
        .getAlbums(
          {
            term: this.term,
            country: this.country,
          },
          LIMIT,
        )
        .then((response) => {
          this.isMore = response.resultCount === LIMIT;
          this.itunesItem = response.results;
          stateStore.loading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    /**
     * 追加検索
     */
    moreSearch() {
      itunesApi
        .getAlbums(
          {
            term: this.term,
            country: this.country,
          },
          LIMIT,
          this.total,
        )
        .then((response) => {
          this.isMore = response.resultCount === LIMIT;
          this.itunesItem = [...this.itunesItem, ...response.results];
        })
        .catch((error) => {
          console.error(error);
        });
    },
    /**
     * アルバムを検索
     */
    searchAlbum() {
      const stateStore = useStateStore();
      stateStore.loading = true;
      itunesApi
        .getSongs({
          id: this.collectionId,
          country: this.country,
        })
        .then((response) => {
          let selectAlbum = [];
          const albumItem = [];

          response.results.forEach((item) => {
            if (item.wrapperType === 'collection') {
              selectAlbum = item;
            } else if (item.wrapperType === 'track') {
              albumItem.push(item);
            }
          });
          this.selectAlbum = selectAlbum;
          this.albumItem = albumItem;
          stateStore.loading = false;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
