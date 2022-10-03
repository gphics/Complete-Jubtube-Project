import HomeView from "./Views/HomeView";
import * as model from "./model/model";
// import config from "../config.js";
import config from "./config";
const paginate = document.querySelector(".paginate");
paginate.style.opacity = 0;
if (module.hot) {
  module.hot.accept();
}

async function Land() {
  try {
    //Fetching data
    model.UpcomingMovies();
    model.NowPlayingMovies();
    model.TopRatedMovies();
    model.MostPopularMovies();
    HomeView.renderHeader();

    //Page Change
    HomeView.renderMove();
    HomeView.renderMove2();
    HomeView.renderMove3();
    HomeView.renderMove4();
    HomeView.UP1(model.Up1);
    HomeView.Down1(model.Down1);
    HomeView.UP2(model.Up2);
    HomeView.Down2(model.Down2);
    HomeView.UP3(model.Up3);
    HomeView.Down3(model.Down3);
    HomeView.UP4(model.Up4);
    HomeView.Down4(model.Down4);

    LoadEach();
  } catch (err) {
    console.error(err);
  }
}
Land();
let btnUp;
let btnDown;
export let page = 1;
const sectNav = document.querySelector(".main--sect--nav");
function age() {
  setTimeout(() => {
    const res = document.querySelector(".result--search--container");
    model.SEARCH();
    paginate.textContent = `Page ${page} of ${model.Total - 1}`;
    paginate.style.opacity = 1;
    console.log(model.Val2);
    model.Val2.forEach((data) => {
      HomeView.renderSearchResult(data, res);
      if (model.testSecond.length > 1) {
        LoadEach();
      }
    });
  }, config.time);
}

function LoadEach() {
  // alert(model.testSecond);
  
  setTimeout(() => {
    const allView = document.querySelectorAll(".spread");
    allView.forEach((element) => {
      element.addEventListener("click", function () {

        sectNav.innerHTML = "";
        HomeView.clearsecParent();
        HomeView.ins2();
        model.EACH(element.dataset.id);

        setTimeout(() => {
          const body = document.querySelector(".target");

          HomeView.renderTarget(model.LaunchB, body);
          setTimeout(() => {
            const revBody = document.querySelector("#Num--3");
            if (model.rev3.length === 0) {
              const you = `<h1 style="font-size:2em; color:red; padding:1%; height:2.2em; width: max-content; border-radius:10%;margin:10%;">No reviews yet !!</h1>`;
              revBody.insertAdjacentHTML("afterbegin", you);
            }
            model.rev3.forEach((elem) => {
              HomeView.renderRev(elem, revBody);
            });
          }, 1000);

          setTimeout(() => {
            const RECBODY = document.querySelector("#rec-list");
            model.rec3.forEach((elem) => {
              HomeView.RecInfo(elem, RECBODY);
            });
          }, 1000);
        }, 1000);
        setTimeout(slide, 1000);

      });
    });
  }, 2000);
}

/*
function LoadEach() {
  setTimeout(() => {
    const allView = document.querySelectorAll(".spread");
    allView.forEach((element) => {
      element.addEventListener("click", function () {
        sectNav.innerHTML = "";
        HomeView.clearsecParent();
        HomeView.ins2();
        model.EACH(element.dataset.id);

        setTimeout(() => {
          const body = document.querySelector(".target");

          HomeView.renderTarget(model.LaunchB, body);
          setTimeout(() => {
            const revBody = document.querySelector("#Num--3");
            if (model.rev3.length === 0) {
              const you = `<h1 style="font-size:2em; color:red; padding:1%; height:2.2em; width: max-content; border-radius:2%;background:white; margin:10% 40% 20% 30%;">No reviews yet !!😣😏</h1>`;
              revBody.insertAdjacentHTML("afterbegin", you);
            }
            model.rev3.forEach((elem) => {
              HomeView.renderRev(elem, revBody);
            });
          }, 3000);

          setTimeout(() => {
            const RECBODY = document.querySelector("#rec-list");
            model.rec3.forEach((elem) => {
              HomeView.RecInfo(elem, RECBODY);
              
            });
          }, 3000);
        }, 2000);
        setTimeout(slide, 4000);
      });
    });
  }, 5000);
}
*/
function slide() {
  const container = document.querySelector(".pushover1");
  const btn = document.querySelectorAll(".btn--tab");
  const content = document.querySelectorAll(".stack");

  container.addEventListener("click", (e) => {
    const link = e.target.closest(".tab-container");
    content.forEach((c) => c.classList.remove("content--active"));
    btn.forEach((b) => b.classList.remove("tab--active"));

    link.classList.add("tab--active");
    console.log(link);
    document
      .querySelector(`.Num--${link.dataset.move}`)
      .classList.add("content--active");
  });
}
function timer() {
  setTimeout(() => {
    const res = document.querySelector(".result--search--container");
    console.log(model.Val2);
    model.Val2.forEach((data) => {
      HomeView.renderSearchResult(data, res);
    });
    paginate.style.opacity = 1;
    console.log(res);
    HomeView.renderMoveRes(res, page);
    btnUp = document.querySelector("#arru5");
    btnDown = document.querySelector("#arrd5");
    // if(model.Val2) LoadEach();
    if (model.testSecond.length > 1) {
      LoadEach();
    }

    console.log(btnDown);
    function clear6() {
      res.innerHTML = "";
    }
    btnUp.addEventListener("click", function () {
      console.log("UP2 CLICKED");
      Up5();
    });

    btnDown.addEventListener("click", function () {
      console.log("UP2 CLICKED");
      Down5();
    });

    let tPages = model.Total;
    console.log(tPages);
    function Up5() {
      if (page !== 0) {
        page--;
        clear6();
        age();
        console.log(page);
      }
      if (page === 0) {
        page = 1;
        age();
      }
    }
    function Down5() {
      if (page === tPages) {
        page = tPages;
        clear6();
        age();
      } else {
        page++;
        clear6();
        age();
        console.log(page);
      }
    }
  }, config.time);
}

config.searchform.addEventListener("submit", (e) => {
  e.preventDefault();
  sectNav.innerHTML = "";
  HomeView.clearsecParent();
  HomeView.ins();
  model.SEARCH();
  //   config.clearInput();

  timer();
});

// config.searchbtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   sectNav.innerHTML = "";
//   HomeView.clearsecParent();
//   HomeView.ins();
//   model.SEARCH();
//   //   config.clearInput();

//   timer();
// });
