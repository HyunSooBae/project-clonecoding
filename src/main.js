// Test line..

// header
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

// header
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

// main
// 메인 비주얼 슬라이더
let sliderImages = document.querySelectorAll(".swiper-slide");
const arrowLeft = document.querySelector(".swiper-button-prev");
const arrowRight = document.querySelector(".swiper-button-next");
let current = 0;

let currPage = document.querySelector(".swiper-pagination .current");
let totalPage = document.querySelector(".swiper-pagination .total");

totalPage.innerText = `${sliderImages.length}`;

function reset() {
  sliderImages.forEach((image) => {
    image.classList.remove('show');
    image.classList.add('hide');

  });
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

startSlide();

// main-news
// masonry layout js 라이브러리 사용
window.addEventListener('load', async function () {
  const elem = document.querySelector('.main-news__list');
  new Masonry(elem, {
    itemSelector: '.ke-list__item',
    columnWidth: 562,
    gutter: 120
  });

});

window.addEventListener('resize', function () {

});

function masonry_layout() {
  const masonry = document.querySelectorAll('.main-news__list');
  if (!masonry) return !1;

  masonry.forEach(function (el) {
    let imgMove = [0, 0];
    const leftWidth = 562;

    const item = el.getElementsByClassName('ke-list__item');
    for (let i = 0; i < item.length; i += 1) {
      const min = imgMove.indexOf(Math.min.apply(0, imgMove));
      console.log(item[i].offsetHeight);
      const x = leftWidth * min;
      const itemHeight = item[i].offsetHeight;
      const y = imgMove[min];
      imgMove[min] += itemHeight;
      item[i].setAttribute('style', `left:${x}px; top:${y}px`)
    }

    const imgMax = Math.max.apply(0, imgMove);
    el.setAttribute('style', `height: ${imgMax}px`);

  })
}

// footer
// 푸터 드롭다운 메뉴 펼치기
const footerDropdown = document.querySelectorAll('.footer__dropdown > a, .footer__dropdown button');

footerDropdown.forEach((item) => {
  item.addEventListener('click', function () {
    const dropdownParent = item.parentElement;
    const dropdownChild = item.nextElementSibling;
    dropdownParent.classList.toggle('footer__dropdown--active');
    dropdownChild.style.height = "${dropdownChild.offsetHeight}";
  })
})