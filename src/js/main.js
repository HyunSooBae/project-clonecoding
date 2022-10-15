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

// 메인 뉴스 영역 mosonry 스타일 적용
window.onload = () => {
  document.querySelectorAll('.ke-list__item').forEach((item) => {
    item.style.gridRowEnd = `span ${item.clientHeight}`;
  });
  const wrap = document.querySelector('.main-news__list');
  wrap.style.display = 'grid';
  wrap.style.gridTemplateColumns = 'repeat(auto-fill, 562rem)';
  wrap.style.gridAutoRows = 'auto';
  wrap.style.gridColumnGap = '120rem';
}