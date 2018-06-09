import axios from 'axios';
const apiUrlAlbum = 'https://itunes.apple.com/search';

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
  }
};

const success = response => {
  return Promise.resolve(response.data);
};

const failed = error => {
  return Promise.reject('取得に失敗しました');
};
