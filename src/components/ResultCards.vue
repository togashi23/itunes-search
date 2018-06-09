<template>
  <div class="row">
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="item in itunesItem" :key="item.index">
      <div class="card">
        <a :href="artWorkUrl(item.artworkUrl100, 'full')" target="_blank">
          <img class="card-img-top" src="@/assets/loading500x500.png">
          <img class="card-img-top" :src="artWorkUrl(item.artworkUrl100, '500x500')" @load="hideLoading" alt="artwork">
        </a>
        <div class="card-body">
          <h5 class="card-title">{{ item.collectionName }}</h5>
          <p class="card-text">{{ item.artistName }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ item.primaryGenreName }}</li>
          <li class="list-group-item">{{ item.releaseDate|date-format }}</li>
        </ul>
        <div class="card-body">
          <a :href="item.collectionViewUrl" target="_blank" class="card-link">iTunes Storeで開く</a>
        </div>
        <div class="card-footer">
          <small class="text-muted">{{ item.copyright }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ResultCards',
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
.card {
  margin-bottom: 1em;
}
</style>

