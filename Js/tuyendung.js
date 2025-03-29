var tuyendungSwiper = new Swiper(".tuyendungSwiper", {
    slidesPerView: 3,
    spaceBetween: 15,
    loop: true,
    pagination: {
        el: ".tuyendung-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",}
});