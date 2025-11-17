import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "swiper/css";
import "swiper/css/pagination";

import "lightgallery/css/lightgallery-core.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

export default function certsSwiperSettings() {
  const $lgSwiper = document.getElementById("lg-certificates");
  const certificatesSlider = new Swiper(".certificates__slider", {
    modules: [Pagination],
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".certificates__slider-pagination",
    },
    on: {
      init: function () {
        const lgInstance = lightGallery($lgSwiper, {
          plugins: [lgZoom, lgThumbnail],
          speed: 500,
          selector: ".swiper-slide:not(.swiper-slide-duplicate)",
        });

        // Before closing lightGallery, make sure swiper slide
        // is aligned with the lightGallery active slide
        $lgSwiper.addEventListener("lgBeforeClose", () =>
          certificatesSlider.slideToLoop(lgInstance.index, 500)
        );
      },
    },
  });
}
