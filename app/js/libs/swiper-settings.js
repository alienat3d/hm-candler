import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function swiperSettings() {
  const swiper = new Swiper(".testimonials__slider", {
    modules: [Pagination],
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".testimonials__slider-pagination",
    },
  });
}
