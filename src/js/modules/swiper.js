import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export function init() {
    var swiper = new Swiper(".mySwiper", {
        modules: [Pagination, Navigation, Autoplay],
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 16,
            }
        },
        autoplay: {
            delay: 2000,
        },
    });
}