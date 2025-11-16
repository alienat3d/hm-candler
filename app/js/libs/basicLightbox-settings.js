import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

export default function basicLightboxSettings() {
  const triggerButtons = document.querySelectorAll(
    ".testimonials__slider-play-button"
  );

  triggerButtons.forEach((button, idx) =>
    button.addEventListener("click", () => {
      const videoNumber = idx + 1;

      const instance = basicLightbox.create(`
        <video controls autoplay loop style="max-width: 90vw; max-height: 90vh;">
          <source src="./videos/testimonials/video-${videoNumber}.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `);
      instance.show();
    })
  );
}
