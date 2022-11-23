const burgerMenu = document.querySelector(".burger-menu");
const navbarLinks = document.querySelector(".navbar-links");
const navbar = document.querySelector("nav");

const navDisplay = () => {
  if (
    (document.body.scrollTop > 50 && window.innerWidth > 1024) ||
    (document.documentElement.scrollTop > 50 && window.innerWidth > 1024)
  ) {
    navbar.style.background = "rgba(39, 37, 33, 0.7)";
  } else if (window.innerWidth <= 1024) {
    navbar.style.background = "rgba(39, 37, 33, 1)";
  } else if (
    (document.body.scrollTop <= 50 && window.innerWidth > 1024) ||
    (document.documentElement.scrollTop <= 50 && window.innerWidth > 1024)
  ) {
    navbar.style.backgroundColor = "transparent";
  }
};

window.onscroll = () => {
  navDisplay();
};

window.onload = () => {
  if (window.innerWidth <= 1024)
    navbar.style.backgroundColor = "rgba(39, 37, 33, 1)";
};

window.onresize = () => {
  if (window.innerWidth > 1024) {
    navbarLinks.classList.remove("active");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.style.background = "rgba(39, 37, 33, 0.7)";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  }
  if (window.innerWidth <= 1024) {
    navbar.style.background = "rgba(39, 37, 33, 1)";
  }
};

burgerMenu.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
