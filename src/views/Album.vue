<template>
  <div class="container-fluid">
    <loading-component v-if="loading"></loading-component>

    <div v-else>
      <!-- アルバム情報 -->
      <div class="row">
        <div class="col-md-3">
          <a :href="artWorkUrl(selectAlbum.artworkUrl100, 'full')" target="_blank">
            <img class="rounded img-fluid mx-auto d-block" src="@/assets/loading200x200.png">
            <img class="rounded img-fluid mx-auto d-block" :src="artWorkUrl(selectAlbum.artworkUrl100, '200x200')" @load="hideLoading" alt="artwork">
          </a>
        </div>

        <div class="col-md-9">
          <h4>{{ selectAlbum.collectionName }}</h4>
          <div class="mb-2"> {{ selectAlbum.artistName }}</div>
          <div class="mb-2">{{ selectAlbum.primaryGenreName }}</div>
          <div class="mb-2">{{ selectAlbum.releaseDate|date-format }}</div>
          <div class="mb-2"><button class="btn btn-primary" @click="exportFile">Export</button></div>
        </div>
      </div>

      <!-- トラック情報 -->
      <ul class="list-group list-group-flush mt-3">
        <li class="list-group-item d-flex justify-content-between" v-for="item in albumItem" :key="item.index">
          <div>
            <span class="text-muted">{{ item.trackNumber}}.</span>
            {{ item.trackName }}
            <small class="text-muted">{{ item.artistName }}</small>
          </div>
          <div class="text-muted">{{ item.trackTimeMillis | msTimeFormat }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import { mapState } from 'vuex';

export default {
  name: 'Album',
  components: {
    'loading-component': Loading
  },
  mounted: function() {
    if (this.$route.params.id !== undefined && this.$route.params.id !== '') {
      this.$store.commit('search/setCollectionId', this.$route.params.id);
      this.$store.dispatch('search/searchAlbum');
    }
  },
  methods: {
    /**
     * 任意のサイズのアートワークURLを生成
     *
     * @param {string} url 100x100のアートワークURL
     * @param {string} size 指定のアートワークサイズ(500x500, full)
     * @return {string} アートワークのURL
     */
    artWorkUrl: function(url, size) {
      if (url === undefined) return '';
      if (size === 'full') size = '100000x100000-999';
      return url.replace(/100x100.*\.jpg/g, size + '.jpg');
    },
    /**
     * 画像のロードが完了したらダミー画像を除去
     */
    hideLoading: event => {
      event.target.previousElementSibling.remove();
    },
    /**
     * トラック情報をファイルに書き出し
     * `%discnumber%;%track%;%title%;%artist%`
     */
    exportFile: function() {
      const delimiter = ';';
      const itemList = this.albumItem.map(item => {
        const row = [
          item.discNumber + '/' + item.discCount,
          item.trackNumber + '/' + item.trackCount,
          item.trackName,
          item.artistName
        ];
        return row.join(delimiter);
      });
      const text = itemList.join('\n');

      const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
      const blob = new Blob([bom, text], { type: 'text/csv' });
      const url = (window.URL || window.webkitURL).createObjectURL(blob);
      const link = document.createElement('a');
      link.download = 'export.txt';
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  computed: {
    ...mapState({
      loading: state => state.state.loading,
      selectAlbum: state => state.search.selectAlbum,
      albumItem: state => state.search.albumItem
    })
  }
};
</script>

<style>
</style>
