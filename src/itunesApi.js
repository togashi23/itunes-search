import axios from 'axios';
const apiUrlAlbum = 'https://itunes.apple.com/search';
const apiUrlSongs = 'https://itunes.apple.com/lookup';

export default {
  getAlbums: params => {
    return axios
      .get(apiUrlAlbum, {
        params: {
          limit: 50,
          entity: 'album',
          ...params
        }
      })
      .then(success)
      .catch(failed);
  },
  getSongs: params => {
    return axios
      .get(apiUrlSongs, {
        params: {
          limit: 200,
          entity: 'song',
          ...params
        }
      })
      .then(success)
      .catch(failed);
  }
};

const success = response => {
  return Promise.resolve(response.data);
};

const failed = error => {
  return Promise.reject('取得に失敗しました');
};
