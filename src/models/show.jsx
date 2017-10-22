import axios from 'axios';

class Show {
  getShows() {
    return axios.get(
      'https://api.themoviedb.org/3/tv/on_the_air?api_key=22eb58e75e4e7b2d6eb174b6787d1d40&language=en-US&page=1'
    );
  }
}

export default Show;
