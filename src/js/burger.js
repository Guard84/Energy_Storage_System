document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById("overlay");
  
    burgerMenu.addEventListener("click", () => {
      navMenu.classList.toggle("nav-menu-open");
      overlay.classList.toggle("active");
      burgerMenu.classList.toggle("active");
    });
  
    overlay.addEventListener("click", () => {
      navMenu.classList.remove("nav-menu-open");
      overlay.classList.remove("active");
      burgerMenu.classList.remove("active");
    });
  });
  