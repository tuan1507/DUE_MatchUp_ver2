var tuyendungSwiper = new Swiper(".tuyendungSwiper", {
  loop: true, // Đảm bảo vòng lặp hoạt động
  autoplay: {
    delay: 2500, // Tự động chạy sau 2.5 giây
    disableOnInteraction: false,
  },
  slidesPerView: 3, // Hiển thị 3 ảnh
  spaceBetween: 20,
  centeredSlides: true, // Căn giữa ảnh đầu tiên ngay từ khi load
  initialSlide: 1, // Đặt ảnh thứ 2 làm ảnh đầu tiên để căn giữa
  navigation: {
    nextEl: ".tuyendung-next",
    prevEl: ".tuyendung-prev",
  },
  pagination: {
    el: ".tuyendung-pagination",
    clickable: true,
  },
  breakpoints: {
    0: { slidesPerView: 1, centeredSlides: false },
    520: { slidesPerView: 2, centeredSlides: true },
    950: { slidesPerView: 3, centeredSlides: true },
  },
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true, // Lặp vô hạn
  centerSlide: true,
  grabCursor: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      0: { slidesPerView: 1 },
      520: { slidesPerView: 2 },
      950: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
  },
});
