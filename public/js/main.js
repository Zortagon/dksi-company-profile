var swiper = new Swiper(".swiper-partners", {
    loop: true,
    spaceBetween: 75,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    breakpoints: {
        640: {
            spaceBetween: 0
        }
    }
});