import axios from 'axios';
const apiUrlAlbum = 'search';
const apiUrlSongs = 'lookup';

const instance = axios.create({
  baseURL: 'https://itunes.apple.com/',
  timeout: 3000,
});

export default {
  getAlbums: (params, limit, offset = 0) => {
    return instance
      .get(apiUrlAlbum, {
        params: {
          limit: limit,
          entity: 'album',
          offset: offset,
          hash: Math.random(),
          ...params,
        },
      })
      .then(success)
      .catch(failed);
  },
  getSongs: (params) => {
    return instance
      .get(apiUrlSongs, {
        params: {
          limit: 200,
          entity: 'song',
          hash: Math.random(),
          ...params,
        },
      })
      .then(success)
      .catch(failed);
  },
};

const success = (response) => {
  return Promise.resolve(response.data);
};

const failed = (error) => {
  console.error(error.message);
  return Promise.reject(new Error('取得に失敗しました'));
};
