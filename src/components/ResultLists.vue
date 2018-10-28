<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item d-flex justify-content-start" v-for="item in itunesItem" :key="item.index">
      <div class="cover-img">
        <a :href="artWorkUrl(item.artworkUrl100, 'full')" target="_blank">
          <img class="rounded float-left" src="@/assets/loading100x100.png">
          <img class="rounded float-left" :src="artWorkUrl(item.artworkUrl100, '100x100')" @load="hideLoading" alt="artwork">
        </a>
      </div>

      <div>
        <h5>
          <router-link :to="'/album/' + item.collectionId">{{ item.collectionName }}</router-link>
        </h5>
        <p>{{ item.artistName }}</p>
        <p>{{ item.primaryGenreName }} - {{ item.releaseDate|date-format }}</p>
        <a :href="item.collectionViewUrl" target="_blank">iTunes Storeで開く</a>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ResultLists',
  methods: {
    /**
     * 任意のサイズのアートワークURLを生成
     *
     * @param {string} url 100x100のアートワークURL
     * @param {string} size 指定のアートワークサイズ(500x500, full)
     * @return {string} アートワークのURL
     */
    artWorkUrl: function(url, size) {
      if (size === 'full') size = '100000x100000-999';
      return url.replace(/100x100.*\.jpg/g, size + '.jpg');
    },
    /**
     * 画像のロードが完了したらダミー画像を除去
     */
    hideLoading: event => {
      event.target.previousElementSibling.remove();
    }
  },
  computed: {
    ...mapState({
      itunesItem: state => state.search.itunesItem
    })
  }
};
</script>

<style scoped>
.cover-img {
  flex-basis: 120px;
}
</style>
