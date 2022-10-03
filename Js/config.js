class config {
  API_KEY = "e454020bbcf8fdaccdf0027d6b28b698";
  LANG = "&language=en-US&page=";
  upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=";
  nowPlayingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
  latestURL = "https://api.themoviedb.org/3/movie/latest?api_key=";
  TopRatedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=";
  MostPopular = "https://api.themoviedb.org/3/movie/popular?api_key=";
  searchbox = document.querySelector(".input--text");

  searchform = document.querySelector(".form--search");
  eachKEY = `api_key=${this.API_KEY}&language=en-US`;
  eachURL ="https://api.themoviedb.org/3/movie/";
  time = 2000;

  clearInput() {
    this.searchbox.value = "";
  }
 
}
export default new config();
