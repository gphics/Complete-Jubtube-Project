const container = document.querySelector(".pushover1")
const btn = document.querySelectorAll(".btn--tab")
const content = document.querySelectorAll(".stack")

container.addEventListener("click", (e)=>{
    const link = e.target.closest(".tab-container")
    content.forEach(c=>c.classList.remove("content--active"))
     btn.forEach((b) => b.classList.remove("tab--active"));

    link.classList.add("tab--active");
    console.log(link);
     document.querySelector(`.Num--${link.dataset.move}`)
     .classList.add("content--active");

})