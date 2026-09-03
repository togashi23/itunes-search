<template>
  <ul class="list-group list-group-flush">
    <li v-for="item in itunesItem" :key="item.index" class="list-group-item d-flex justify-content-start">
      <div class="cover-img">
        <a :href="artWorkUrl(item.artworkUrl100, 'full')" target="_blank">
          <img class="rounded float-start" src="@/assets/loading100x100.png" />
          <img
            class="rounded float-start"
            :src="artWorkUrl(item.artworkUrl100, '100x100')"
            alt="artwork"
            @load="hideLoading"
          />
        </a>
      </div>

      <div>
        <h5>
          <router-link :to="'/album/' + item.collectionId">{{ item.collectionName }}</router-link>
        </h5>
        <p>{{ item.artistName }}</p>
        <p>{{ item.primaryGenreName }} - {{ dateFormat(item.releaseDate) }}</p>
        <a :href="item.collectionViewUrl" target="_blank">iTunes Storeで開く</a>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'pinia';
import { useSearchStore } from '@/store/search';
import { artWorkUrl, hideLoading } from '@/util/artwork';
import { dateFormat } from '@/util/filters';

export default {
  name: 'ResultLists',
  methods: {
    artWorkUrl,
    hideLoading,
    dateFormat,
  },
  computed: {
    ...mapState(useSearchStore, ['itunesItem']),
  },
};
</script>

<style scoped>
.cover-img {
  flex-basis: 120px;
}
</style>
