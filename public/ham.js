const hamburguer = document.getElementById("hamburguer");
const navUl = document.getElementById("nav-ul");
hamburguer.addEventListener("click", () => {
  navUl.classList.toggle("show");
});
