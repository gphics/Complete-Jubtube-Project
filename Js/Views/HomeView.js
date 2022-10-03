import { movies } from "../model/model";
import * as model from "../model/model";
const upcomingData = movies.upcoming;
// console.log(upcomingData);
class HomeView {
  parent = document.querySelector("#content--space");
  secParent = document.querySelector(".main--section--main");
  house1 = document.querySelector("#house1");
  house2 = document.querySelector("#house2");
  // house3 = document.querySelector("#house3");
  house4 = document.querySelector("#house4");
  house5 = document.querySelector("#house5");
  accHouse1 = document.querySelector("#place1");
  accHouse2 = document.querySelector("#place2");
  // accHouse3 = document.querySelector("#place3");
  accHouse4 = document.querySelector("#place4");
  accHouse5 = document.querySelector("#place5");
  resHouse = document.querySelector(".result--search--container");
  clearsecParent() {
    this.secParent.innerHTML = "";
  }
  ins() {
    const html = ` <section class="result--search--container">  </section>`;
    this.secParent.insertAdjacentHTML("afterbegin", html);
  }
  ins2() {
    const html = `<section class="target"></section>`;
    this.secParent.insertAdjacentHTML("afterbegin", html);
  }
  renderRev(data, body) {
    const pics = data.author_details
      ? `https://image.tmdb.org/t/p/w500/${data.author_details.avatar_path}`
      : "Devsldpi.a7b5d534.svg";
    const html = `
    <div  style="overflow-y:scroll; padding:3%;" class="review">
                               <div class="img--holder">
                                <img src="${pics}" class="revImg" alt="Author's Image">
                                <h3>${data.author}</h3>
                                <small>${data.created_at}</small>
                               </div>
                               <div  style="overflow-y:hidden" class="reviewHolder">
                                <p style="overflow-y:hidden; margin: 0 0 2% 0">${data.content}</p>
                               </div>
                            </div> 
    `;
    body.insertAdjacentHTML("beforeend", html);
  }
  renderTarget(data, body) {
    const genres = data.genres.map((e) => e.name).join(" , ");
    const country = data.production_countries[0].name;
    const html = `
  
                <section  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path});backgrounf-size:cover; background-repeat: repeat-x" class="partA tar">
                    <div class="space1 just"> 
                        <a href="https://www.youtube.com/results?search_query=${data.title}">
                            <img src="YU.svg" alt="youtube link" class="youtube--link">
                        </a>
                       
                    </div>

                </section>
                 <a style="text-decoration:none;text-align:center; padding:1%; margin:5% 10% 5% 30%; font-weight:900; background: rgb(2, 157, 91); color:white; width:max-content;border-radius:5px;" id="homepage" href="${data.homepage}">
                           <small> Visit video homepage</small>
                        </a>
                <section class="partB tar">

                    <div class="pushover1">

                        <button class="btn--tab tab-container tab--active" data-move="1">Info</button>

                        <button class="btn--tab tab-container" data-move="2">Overview</button>

                        <button class="btn--tab tab-container" data-move="3">Reviews</button>

                        <button class="btn--tab tab-container" data-move="4">Recommended</button>




                    </div>
                    <div class="pushover2">
                        <article id="Num--1" class="stack Num--1 content--active">
                            
                          <table>
                            <tr>
                                <td>Title</td>
                                <td>${data.title}</td>
                            </tr>

                            <tr>
                                <td>Genre</td>
                                <td>${genres}</td>
                            </tr>


                            <tr>
                                <td>Release Date</td>
                                <td>${data.release_date}</td>
                            </tr>
                            <tr>
                                <td>Production Country</td>
                                <td>${country}</td>
                            </tr>
                            <tr>
                                <td>Ratings</td>
                                <td>${data.vote_average}</td>
                            </tr>

                          </table>
                        
                        </article>
                        <article id="Num--2" class="stack Num--2">
                            <p>${data.overview}</p>
                        </article>
                        <article id="Num--3" class="stack Num--3">
                            
                        </article>
                        <article id="Num--4" class="stack Num--4">
                            <section id="rec-list">
                           
                               
                              
                               
                                

                            </section>
                        </article>
                    </div>
                </section> 
    
    
    `;
    body.insertAdjacentHTML("afterbegin", html);
  }
  RecInfo(data, body) {
    const html = `
             <div style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}" class="rec--movies eachRec"  data-id="${data.id}">
                                        <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                                    </div>
    `;
    body.insertAdjacentHTML("beforeend", html);
  }

  // insRec(body) {
  //   const html = `  <section id="rec-list">    </section>`;
  //   body.insertAdjacentHTML("afterbegin", html);
  // }
  renderSearchResult(data, body) {
    const html = `
            <div class="each-result spread" style="background-image:url(https://image.tmdb.org/t/p/w500/${
              data.poster_path || data.backdrop_path
            }); overflow: hidden" data-id="${data.id}"">
                   <aside class="internal">
                                <h5 class="textA intro">${
                                  data.original_title || data.name
                                }  </h5>
                                <h6 class="textB intro">${
                                  data.release_date || data.first_air_date
                                }</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                </div>
    `;

    body.insertAdjacentHTML("beforeend", html);
    return html;
  }
  renderSpinner() {
    const spinner = `
        <section class="spinner">
              <img src="spinner-gap.82a45b17.svg"  alt="" class="spin">
            </section>
        `;
    this.parent.insertAdjacentHTML("afterbegin", spinner);
    return spinner;
  }
  UP1(func) {
    const btnUp = document.querySelector(".arrowUp");
    btnUp.addEventListener("click", function () {
      func();
    });
  }
  Down1(func) {
    const btnDown = document.querySelector(".arrowDown");
    btnDown.addEventListener("click", function () {
      func();
    });
  }
  UP2(func) {
    const btnUp = document.querySelector("#arru1");
    btnUp.addEventListener("click", function () {
      func();
    });
  }
  Down2(func) {
    const btnDown = document.querySelector("#arrd1");
    btnDown.addEventListener("click", function () {
      func();
    });
  }
  UP3(func) {
    const btnUp = document.querySelector("#arru2");
    btnUp.addEventListener("click", function () {
      func();
    });
  }
  Down3(func) {
    const btnDown = document.querySelector("#arrd2");
    btnDown.addEventListener("click", function () {
      func();
    });
  }

  UP4(func) {
    const btnUp = document.querySelector("#arru3");
    btnUp.addEventListener("click", function () {
      func();
    });
  }
  Down4(func) {
    const btnDown = document.querySelector("#arrd3");
    btnDown.addEventListener("click", function () {
      func();
    });
  }

  clear1() {
    this.house1.innerHTML = "";
  }
  clear2() {
    this.house2.innerHTML = "";
  }
  clear3() {
    this.house3.innerHTML = "";
  }
  clear4() {
    this.house4.innerHTML = "";
  }
  clear5() {
    this.house5.innerHTML = "";
  }

  renderMove() {
    const html = `
   <section class="accordion first--acordion">
                        <div class="arrowUp"> <img class="move--to" src="UI.svg"  alt="l"> </div>
                        <div class="arrowDown"> <img class="move--to" src="DI.svg" alt="">
                        </div>
                    </section>
  `;
    this.accHouse1.insertAdjacentHTML("beforeend", html);
  }
  renderMoveRes(place) {
    const html = `
   <section class="accordion first--acordion" >

                        <div id="arru5" class="arrowUp"> <img  class="move--to " src="CaretU.svg" style="filter:sepia(27%)" alt="ccc"> </div>
                        <div id="arrd5" class="arrowDown"> <img class="move--to" src="next11.svg" alt="">
                        </div>
                    </section>
  `;

    place.insertAdjacentHTML("beforebegin", html);
  }
  renderMove2() {
    const html = `
   <section class="accordion first--acordion">
                        <div id="arru1" class="arrowUp"> <img class="move--to " src="UI.svg" alt="ttt"> </div>
                        <div id="arrd1" class="arrowDown"> <img class="move--to" src="DI.svg" alt="">
                        </div>
                    </section>
  `;

    this.accHouse2.insertAdjacentHTML("beforeend", html);
  }

  renderMove3() {
    const html = `
   <section class="accordion first--acordion">
                        <div id="arru2" class="arrowUp"> <img class="move--to " src="UI.svg" alt=""> </div>
                        <div id="arrd2" class="arrowDown"> <img class="move--to" src="DI.svg" alt="">
                        </div>
                    </section>
  `;

    this.accHouse4.insertAdjacentHTML("beforeend", html);
  }
  renderMove4() {
    const html = `
   <section class="accordion first--acordion">
                        <div id="arru3" class="arrowUp"> <img class="move--to " src="UI.svg" alt=""> </div>
                        <div id="arrd3" class="arrowDown"> <img class="move--to" src="DI.svg" alt="">
                        </div>
                    </section>
  `;

    this.accHouse5.insertAdjacentHTML("beforeend", html);
  }
  renderUpcoming(data) {
    const elem = `
       
                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${data.id}"">
                            <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                        </div>
                         
      `;

    this.house1.insertAdjacentHTML("beforeend", elem);
    return elem;
  }
  renderNowPlaying(data) {
    const elem = `
       
                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${data.id}"">
                            <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                        </div>
                         
      `;

    this.house2.insertAdjacentHTML("beforeend", elem);
    return elem;
  }

  renderTopRated(data) {
    const elem = `
       
                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${data.id}"">
                            <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                        </div>
                         
      `;

    this.house4.insertAdjacentHTML("beforeend", elem);
    return elem;
  }

  renderMostPopular(data) {
    const elem = `
       
                        <div  style="background-image:url(https://image.tmdb.org/t/p/w500/${data.poster_path}); overflow: hidden" class="upcoming--display all--view spread" data-id="${data.id}"">
                            <aside class="internal">
                                <h5 class="textA intro">${data.title}  </h5>
                                <h6 class="textB intro">${data.release_date}</h6>
                                <h6 class="textC intro">
                                
                                    <img src="st.svg" alt="Not available" class="rate"> 
                                </h6>
                            </aside>
                        </div>
                         
      `;

    this.house5.insertAdjacentHTML("beforeend", elem);
    return elem;
  }

  renderHeader() {
    const header = `
    <section class="main--sect--nav">
                <div class="main--list">
                    <a id="linkA" href="#" class="list one">Upcoming</a>
                    <a  id="linkB" href="#" class="list two"> Now Playing</a>
                   
                    <a  id="linkC" href="#" class="list four">Top Rated</a>
                    <a  id="linkD" href="#" class="list five">Most Popular</a>
                </div>

            </section>`;

    this.parent.insertAdjacentHTML("afterbegin", header);

    return header;
  }
}

export default new HomeView();
