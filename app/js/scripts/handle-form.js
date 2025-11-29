export default function handleForm() {
  const form = document.querySelector(".contact-form__form");
  const formInputs = form.querySelectorAll(".contact-form__input");
  const modal = document.querySelector(".modal");
  const modalButton = modal.querySelector(".modal__button");
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  function allInputsValid() {
    return Array.from(formInputs).every((input) => input.validity.valid);
  }
  function clearInputs() {
    formInputs.forEach(input => input.value = '');
  }

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (!allInputsValid()) return;
    document.body.style.cssText = `overflow: hidden; padding-right: ${scrollbarWidth}px;`;
    modal.classList.add("modal--show");
  });

  modalButton.addEventListener("click", () => {
    clearInputs();
    modal.classList.remove("modal--show");
    setTimeout(() => document.body.style.cssText = `overflow: visible;`, 400);
  });
}
