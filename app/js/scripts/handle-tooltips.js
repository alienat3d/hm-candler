export default function handleTooltips() {
  const asterisks = document.querySelectorAll(".tooltip-asterisk");
  const tooltips = document.querySelectorAll(".tooltip");

  asterisks.forEach((asterisk, idx) => {
    asterisk.addEventListener("mouseenter", () => {
      tooltips.forEach((tooltip, index) => {
        if (idx !== index) return;
        tooltip.classList.add("tooltip--show");
      });
    });
    asterisk.addEventListener("mouseleave", () => {
      tooltips.forEach((tooltip) => {
        if (tooltip.classList.contains("tooltip--show")) tooltip.classList.remove("tooltip--show");
      });
    });
  });
}
