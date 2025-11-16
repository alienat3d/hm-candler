import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function swiperSettings() {
  const swiper = new Swiper(".testimonials__slider", {
    modules: [Pagination],
    loop: true,
    autoplay: {
      delay: 5000,
    },
    spaceBetween: 20,
    grabCursor: true,
    // pauseOnMouseEnter: true,
    pagination: {
      el: ".testimonials__slider-pagination",
    },
  });
}
