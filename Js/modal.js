const cancelbtn = document.querySelector(".cancel");
const modal = document.querySelector(".modal");
const fire = document.querySelector(".main--section--main");

cancelbtn.addEventListener("click", () => {
  modal.classList.add("modalHide");
  fire.classList.remove("fireClass");
});

const devs = document.querySelectorAll(".devs");
const docs = document.querySelectorAll(".docs");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");

function work(A, B) {
  A.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("modalHide");
      fire.classList.add("fireClass")
      B.scrollIntoView({ behaviour: "smooth" });
    });
  });
}

work(devs, modal1)
work(docs, modal2)