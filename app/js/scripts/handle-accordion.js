export default function handleAccordion() {
  const accordionTitles = document.querySelectorAll(".accordion__item-title");
  const accordionContents = document.querySelectorAll(
    ".accordion__item-content"
  );

  accordionTitles.forEach((accordionTitle, titleIndex) => {
    accordionTitle.addEventListener("click", (evt) => {
      const currentContent = accordionContents[titleIndex];

      if (evt.target.classList.contains("accordion__item-title--active")) {
        accordionTitle.classList.remove("accordion__item-title--active");
        currentContent.style.maxHeight = null;
        currentContent.classList.remove("accordion__item-content--active");
      } else {
        accordionTitles.forEach((title, index) => {
          title.classList.remove("accordion__item-title--active");
          accordionContents[index].style.maxHeight = null;
          accordionContents[index].classList.remove(
            "accordion__item-content--active"
          );
        });

        accordionTitle.classList.add("accordion__item-title--active");
        currentContent.classList.add("accordion__item-content--active");
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      }
    });
  });
}
