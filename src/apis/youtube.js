import axios from 'axios';

const KEY = 'AIzaSyBxel0HUgus8u6-x7iXohs4tRSkXSJFnIc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
