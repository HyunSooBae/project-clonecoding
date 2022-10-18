// console.log('Hello~')

// async function test() {
//   const promise = Promise.resolve(123)
//   console.log(await promise)
// }
// test()


// 메인 비주얼 슬라이더
let sliderImages = document.querySelectorAll(".swiper-slide"),
  arrowLeft = document.querySelector(".swiper-button-prev"),
  arrowRight = document.querySelector(".swiper-button-next"),
  current = 0;

let currPage = document.querySelector(".swiper-pagination .current"),
  totalPage = document.querySelector(".swiper-pagination .total");

totalPage.innerText = `${sliderImages.length}`;
// console.log(currPage);

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    // sliderImages[i].style.opacity = "0";
    sliderImages[i].classList.remove('show');
    sliderImages[i].classList.add('hide');
  }
}

function startSlide() {
  reset();
  sliderImages[0].classList.remove('hide');
  sliderImages[0].classList.add('show');
  currPage.innerText = "1";
}

function slideLeft() {
  reset();
  sliderImages[current - 1].classList.remove('hide');
  sliderImages[current - 1].classList.add('show');
  currPage.innerText = `${current}`;
  current -= 1;
}

function slideRight() {
  reset();
  sliderImages[current + 1].classList.remove('hide');
  sliderImages[current + 1].classList.add('show');
  current += 1;
  currPage.innerText = `${current + 1}`;
}

arrowLeft.addEventListener("click", function () {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener("click", function () {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

//
// function autuPlay() {
//    setTimeout(, 1000)
// }

startSlide();


// 메인 비주얼 스와이퍼 슬라이더 swiper.js - 옵션
// const swiper = new Swiper('.swiper', {
// Optional parameters
// direction: 'vertical',
// loop: true,
// pagination: {
//   el: '.swiper-pagination',
// type: 'fraction',
// clickable: false,
//   renderBullet: function (index, className) {
//     return '<span class="' + className + '">' + (index + 1) + "</span>";
//   },
// },
// navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
// },
// autoplay: {
//   delay: 3000,
// },

// });

// 메인 비주얼 스와이퍼 슬라이더 - 재생 일시정지 버튼
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

// 푸터 드롭다운 메뉴 펼치기
const footerDropdown = document.querySelectorAll('.footer__dropdown > a, .footer__dropdown button');

for (let i = 0; i < footerDropdown.length; i += 1) {
  footerDropdown[i].addEventListener('click', function () {
    const dropdownParent = this.parentElement;
    const dropdownChild = this.nextElementSibling;
    dropdownParent.classList.toggle('footer__dropdown--active');
    dropdownChild.style.height = "${dropdownChild.offsetHeight}";

    console.log(dropdownChild.offsetHeight);
  });

}

// 페이지 스크롤시 헤더 메뉴 숨기고 보이는 이벤트
const HEADER = document.querySelector('header');
const MAIN_VISUAL = document.querySelector('.main-visual');
let prevScrollTop;

window.onscroll = function () { scrollEvent_header() };

function scrollEvent_header() {

  let currentScrollTop = document.documentElement.scrollTop;

  if (
    HEADER.clientHeight < currentScrollTop && currentScrollTop < MAIN_VISUAL.clientHeight
    ||
    MAIN_VISUAL.clientHeight < currentScrollTop && prevScrollTop > currentScrollTop
  ) {
    HEADER.classList.add('reveal');
    HEADER.classList.remove('hide');
  }
  else if (
    HEADER.clientHeight > currentScrollTop
  ) {
    HEADER.classList.remove('reveal');
  }
  else if (
    HEADER.clientHeight > currentScrollTop
    ||
    MAIN_VISUAL.clientHeight < currentScrollTop && prevScrollTop < currentScrollTop) {
    HEADER.classList.remove('reveal');
    HEADER.classList.add('hide');
  }
  prevScrollTop = currentScrollTop;
};

// 헤더 메뉴에 hover 했을때 헤더 스타일 바꾸기 (reveal 클래스 추가)
const atagHover = HEADER.querySelectorAll('nav a');

atagHover.forEach((aTag) => {
  aTag.addEventListener('mouseover', function () {
    HEADER.classList.add('reveal');
  });
  aTag.addEventListener('mouseout', function () {
    let currentScrollTop = document.documentElement.scrollTop;

    if (HEADER.clientHeight > currentScrollTop) {
      HEADER.classList.remove('reveal');
    }
  });
});

