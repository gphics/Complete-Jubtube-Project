// Styling of links
const linkOne = document.querySelector("#linkA");
const linkTwo = document.querySelector("#linkB");
const linkThree = document.querySelector("#linkC");

const linkFive = document.querySelector("#linkD");

// Sections
const upcoming = document.querySelector(".upcoming--view");
const nowPlaying = document.querySelector(".now-playing");

const topRated = document.querySelector(".top-rated");
const mostPopular = document.querySelector(".most-popular");

//Functions
function Compute(A, B){
    A.addEventListener("click", (e) =>{
        e.preventDefault()
        B.scrollIntoView({behavior: 'smooth'})
    })
}
Compute(linkOne, upcoming)
Compute(linkTwo, nowPlaying);

Compute(linkThree, topRated);
Compute(linkFive, mostPopular);