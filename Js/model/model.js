import HomeView from "../Views/HomeView";
import config from "../config.js";
import { page as newPage } from "../controller";
import { async } from "regenerator-runtime";
import * as control from "../controller"

export const movies = {
  upcoming: {},
  reviews: {},
};

export let LaunchB;
export let rev3;
export let rec3;
export async function EACH(A) {
  // const LaunchA = await fetch(`${config.eachURL}${id}${config.eachKEY}`)
  const LaunchA = await fetch(
    `https://api.themoviedb.org/3/movie/${A}?api_key=${config.API_KEY}&language=en-US`
  );

  LaunchB = await LaunchA.json();
  console.log(LaunchB);
  const rev = await fetch(
    `https://api.themoviedb.org/3/movie/${A}/reviews?api_key=${config.API_KEY}&language=en-US&page=1`
  );
  let rev2 = await rev.json();
  
  rev2 = rev2.results;
  rev3 = rev2;
  

  const recA = await fetch(
    `https://api.themoviedb.org/3/movie/${A}/recommendations?api_key=${config.API_KEY}&language=en-US&page=1`
  );
  let recB = await recA.json();
  recB = recB.results;
  rec3 = recB;

}

export let page = 1;
export let tPages;
export let testSecond;
export async function UpcomingMovies() {
  try {
    const first = await fetch(
      `${config.upcomingURL}${config.API_KEY}${config.LANG}${page}`
    );
    let second = await first.json();
    tPages = second.total_pages;
    second = second.results;
    testSecond = second;
    second.forEach((element) => {
      HomeView.renderUpcoming(element);
    });
  } catch (err) {
    console.log(err, "I am the");
  }
}

export function Up1() {
  if (page !== 0) {
    page--;
    HomeView.clear1();
    UpcomingMovies();
  }
  if (page === 0) {
    page = 1;
    UpcomingMovies();
  }
  if (testSecond.length > 1) control.LoadEach();

}
export function Down1() {
  console.log('welcome');
  if (page === tPages) {
    page = tPages;
    HomeView.clear1();
    UpcomingMovies();
  } else {
    page++;
    HomeView.clear1();
    UpcomingMovies();
  }
  if (testSecond.length>1) control.LoadEach()

}

let td;
export async function NowPlayingMovies() {
  try {
    const first = await fetch(
      `${config.nowPlayingURL}${config.API_KEY}${config.LANG}${page}`
    );
    let second = await first.json();
    tPages = second.total_pages;
    second = second.results;
      td = second
    second.forEach((element) => {
      HomeView.renderNowPlaying(element);
    });
  } catch (err) {
    console.log(err, "I am the");
  }
}

export function Up2() {
  console.log("UP2 CLICKED");
  if (page !== 0) {
    page--;
    HomeView.clear2();
    NowPlayingMovies();
  }
  if (page === 0) {
    page = 1;
    NowPlayingMovies();
  }
  if (td.length > 1) control.LoadEach();

}
export function Down2() {
  if (page === tPages) {
    page = tPages;
    HomeView.clear2();
    NowPlayingMovies();
  } else {
    page++;
    HomeView.clear2();
    NowPlayingMovies();
  }
     if (td.length > 1) control.LoadEach();

}

let tc;
export async function TopRatedMovies() {
  try {
    const first = await fetch(
      `${config.TopRatedURL}${config.API_KEY}${config.LANG}${page}`
    );
    let second = await first.json();
    tPages = second.total_pages;
    second = second.results;
tc = second
    second.forEach((element) => {
      HomeView.renderTopRated(element);
    });
  } catch (err) {
    console.log(err, "I am the");
  }
}

export function Up3() {
  console.log("UP2 CLICKED");
  if (page !== 0) {
    page--;
    HomeView.clear4();
    TopRatedMovies();
  }
  if (page === 0) {
    page = 1;
    TopRatedMovies();
  }
     if (tc.length > 1) control.LoadEach();

}
export function Down3() {
  if (page === tPages) {
    page = tPages;
    HomeView.clear4();
    TopRatedMovies();
  } else {
    page++;
    HomeView.clear4();
    TopRatedMovies();
  }
    if (tc.length > 1) control.LoadEach();

}
let ct;
export async function MostPopularMovies() {
  try {
    const first = await fetch(
      `${config.MostPopular}${config.API_KEY}${config.LANG}${page}`
    );
    let second = await first.json();
    tPages = second.total_pages;
    second = second.results;
      ct = second
    second.forEach((element) => {
      HomeView.renderMostPopular(element);
    });
  } catch (err) {
    console.log(err, "I am the");
  }
    control.LoadEach();

}

export function Up4() {
  console.log("UP2 CLICKED");
  if (page !== 0) {
    page--;
    HomeView.clear5();
    MostPopularMovies();
  }
  if (page === 0) {
    page = 1;
    MostPopularMovies();
  }
    if (ct.length > 1) control.LoadEach();

}
export function Down4() {
  if (page === tPages) {
    page = tPages;
    HomeView.clear5();
    MostPopularMovies();
  } else {
    page++;
    HomeView.clear5();
    MostPopularMovies();
  }
  if (ct.length > 1) control.LoadEach();

}

//Search functionality
export let Val2;
export let Total;
export async function SEARCH() {
  try {
    const value = config.searchbox.value;
    const Val1 = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${config.API_KEY}&query=${value}&language=en-US&page=${newPage}&include_adult=fals`
    );
    console.log(newPage);
    Val2 = await Val1.json();
    console.log(Val2);
    Total = Val2.total_pages;

    Val2 = Val2.results;
    if (Val2.length === 0)
      throw new Error(`No result found for your search (${value})`);
    // Val2.forEach(data =>{
    //     HomeView.renderSearchResult(data,res)
    // })
  } catch (err) {
    const mes = `<h1 style="color:red; transform:translate(20vw)">${err.message}</h1>`;

    HomeView.parent.insertAdjacentHTML("beforeend", mes);
    setTimeout(() => {
      HomeView.parent.innerHTML = "";
    }, 5000);
    console.error(err, "Please am here");
  }
}
