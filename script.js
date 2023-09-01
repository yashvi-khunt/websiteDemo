window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".nav-inside");
  if (window.pageYOffset > 0) {
    nav.classList.add("navbar-scroll");
  } else {
    nav.classList.remove("navbar-scroll");
  }
});
