<template>
  <div class="row">
    <div v-for="item in itunesItem" :key="item.index" class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <div class="card">
        <a :href="artWorkUrl(item.artworkUrl100, 'full')" target="_blank">
          <img class="card-img-top" src="@/assets/loading500x500.png" />
          <img
            class="card-img-top"
            :src="artWorkUrl(item.artworkUrl100, '500x500')"
            alt="artwork"
            @load="hideLoading"
          />
        </a>
        <div class="card-body">
          <h5 class="card-title">
            <router-link :to="'/album/' + item.collectionId">{{ item.collectionName }}</router-link>
          </h5>
          <p class="card-text">{{ item.artistName }}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ item.primaryGenreName }}</li>
          <li class="list-group-item">{{ item.releaseDate | dateFormat }}</li>
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
import { artWorkUrl, hideLoading } from '@/util/artwork';

export default {
  name: 'ResultCards',
  methods: {
    artWorkUrl,
    hideLoading,
  },
  computed: {
    ...mapState({
      itunesItem: (state) => state.search.itunesItem,
    }),
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1em;
}
</style>
