import Swiper from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function testimonialsSwiperSettings() {
  const testimonialsSlider = new Swiper(".testimonials__slider", {
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: 7000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: ".testimonials__slider-pagination",
      clickable: true,
    },
  });
}
