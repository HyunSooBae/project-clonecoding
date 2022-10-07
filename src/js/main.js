console.log('Hello~')

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()

// main-visual swiper-slider
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    // type: 'fraction',
    // clickable: false,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 3000,
  // },

});

// 재생 일시정지 버튼
// $(".swiper-button-pause").click(function(){
//   homeSwiper.autoplay.stop();
// });

// $(".swiper-button-play").click(function(){
//   homeSwiper.autoplay.start();
// });