export function burgerMenuFunc() {
  const menuButton = document.querySelector(".hamburger");
  const menuListMobile = document.querySelector(".header__menu-list");

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("is-active");
    menuListMobile.classList.toggle("menu--open");
  });
}
