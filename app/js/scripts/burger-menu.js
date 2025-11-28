export default function burgerMenuFunc() {
  const menuButton = document.querySelector(".hamburger");
  const menuListMobile = document.querySelector(".header__menu-list");
  const menuMobileLinks = menuListMobile.querySelectorAll("a");

  function toggleMobileMenu() {
    menuButton.classList.toggle("is-active");
    menuListMobile.classList.toggle("menu--open");
  }

  menuButton.addEventListener("click", () => toggleMobileMenu());

  menuMobileLinks.forEach((link) =>
    link.addEventListener("click", () =>
      setTimeout(() => toggleMobileMenu(), 1000)
    )
  );
}
