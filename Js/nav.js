//Handling click events on nav button

const menu = document.querySelector(".Menu");
const nav = document.querySelector(".main--header");
const reject = document.querySelector(".reject");
const head = document.querySelector(".head--head--head");
const sectionOn = document.querySelector(".upcoming--view");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.remove("hide-nav");
});

reject.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.add("hide-nav");
});

//Making the nav bar become sticky
function stick(entry) {
  const [ent] = entry;
  if (!ent.isIntersecting) {
    head.classList.add("sticky--caller");
    nav.classList.add("static--responder");
    const opt = document.querySelector(".static--responder");
    opt.style.background = "white";
  } else {
    head.classList.remove("sticky--caller");
    nav.classList.remove("static--responder");
  }
}
const options = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(stick, options);
observer.observe(sectionOn);

const home = document.querySelector(".home");
home.addEventListener("click", function (e) {
  window.location.reload();
});

const home2 = document.querySelector(".noon");
home2.addEventListener("click", function (e) {
  window.location.reload();
});

const topr = document.querySelectorAll(".Rated");
const popu = document.querySelectorAll(".popular");
const topRated1 = document.querySelector(".top-rated");
const mostPopular1 = document.querySelector(".most-popular");
console.log(popu);

topr.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    topRated1.scrollIntoView({ behavior: "smooth" });
  });
});

popu.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    mostPopular1.scrollIntoView({ behavior: "smooth" });
  });
});
