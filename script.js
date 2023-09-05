window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".main-header");
  if (window.pageYOffset > 0) {
    nav.classList.add("navbar-scroll");
  } else {
    nav.classList.remove("navbar-scroll");
  }
});
const displayMenu = function () {
  document.querySelector(".navbar-collapse").classList.toggle("collapse");
};

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", displayMenu);
