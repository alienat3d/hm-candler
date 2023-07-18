export function burgerMenuFunc() {
  const menuButton = document.querySelector(".menu__burger");
  const menuListMobile = document.querySelector(".header__menu-list");

  menuButton.addEventListener("click", (evt) => {
    menuListMobile.classList.toggle("menu--open");
  });
}
