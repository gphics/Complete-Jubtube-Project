const cancelbtn = document.querySelector(".cancel")
const modal = document.querySelector(".modal")
const long = document.querySelector(".long")
cancelbtn.addEventListener("click", ()=>{
    modal.classList.add("modalHide")
})

long.addEventListener("click", () => {
  modal.classList.remove("modalHide");
});