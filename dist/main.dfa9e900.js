// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"yUAd":[function(require,module,exports) {
// main
// 메인 비주얼 슬라이더
var sliderImages = document.querySelectorAll(".swiper-slide");
var arrowLeft = document.querySelector(".swiper-button-prev");
var arrowRight = document.querySelector(".swiper-button-next");
var current = 0;
var currPage = document.querySelector(".swiper-pagination .current");
var totalPage = document.querySelector(".swiper-pagination .total");
totalPage.innerText = "".concat(sliderImages.length);

function reset() {
  sliderImages.forEach(function (image) {
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
  currPage.innerText = "".concat(current);
  current -= 1;
}

function slideRight() {
  reset();
  sliderImages[current + 1].classList.remove('hide');
  sliderImages[current + 1].classList.add('show');
  current += 1;
  currPage.innerText = "".concat(current + 1);
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
startSlide(); // main
// 메인 뉴스 영역 mosonry 스타일 적용
// window.onload = () => {
//   document.querySelectorAll('.ke-list__item').forEach((item) => {
//     item.style.gridRowEnd = `span ${item.clientHeight}`;
//   });
//   const wrap = document.querySelector('.main-news__list');
//   wrap.style.display = 'grid';
//   wrap.style.gridTemplateColumns = 'repeat(auto-fill, 562rem)';
//   wrap.style.gridAutoRows = 'auto';
//   wrap.style.gridColumnGap = '120rem';
// }
// 2022.10.27 1차과제 - 1차 리뷰 후 추가

document.addEventListener('DOMContentLoaded', function () {
  masonry_layout();
});
window.addEventListener('resize', function () {
  masonry_layout();
});

function masonry_layout() {
  var masonry = document.querySelectorAll('.main-news__list'); // console.log(masonry);

  if (!masonry) return !1;
  masonry.forEach(function (el) {
    var imgMove = [0, 0];
    var leftWidth = 562; // console.log(el);

    var item = el.getElementsByClassName('ke-list__item'); // console.log(item);

    for (var i = 0; i < item.length; i += 1) {
      var min = imgMove.indexOf(Math.min.apply(0, imgMove));
      console.log(item[i].offsetHeight);
      var x = leftWidth * min; // console.log(item[i]);

      var itemHeight = item[i].offsetHeight; // console.log(itemHeight);

      var y = imgMove[min]; // console.log(y)

      imgMove[min] += itemHeight;
      item[i].setAttribute('style', "left:".concat(x, "px; top:").concat(y, "px"));
    }

    var imgMax = Math.max.apply(0, imgMove); // console.log(imgMax)

    el.setAttribute('style', "height: ".concat(imgMax, "px"));
  });
} // header
// 페이지 스크롤시 헤더 메뉴 숨기고 보이는 이벤트


var HEADER = document.querySelector('header');
var MAIN_VISUAL = document.querySelector('.main-visual');
var prevScrollTop;

window.onscroll = function () {
  scrollEvent_header();
};

function scrollEvent_header() {
  var currentScrollTop = document.documentElement.scrollTop;

  if (HEADER.clientHeight < currentScrollTop && currentScrollTop < MAIN_VISUAL.clientHeight || MAIN_VISUAL.clientHeight < currentScrollTop && prevScrollTop > currentScrollTop) {
    HEADER.classList.add('reveal');
    HEADER.classList.remove('hide');
  } else if (HEADER.clientHeight > currentScrollTop) {
    HEADER.classList.remove('reveal');
  } else if (HEADER.clientHeight > currentScrollTop || MAIN_VISUAL.clientHeight < currentScrollTop && prevScrollTop < currentScrollTop) {
    HEADER.classList.remove('reveal');
    HEADER.classList.add('hide');
  }

  prevScrollTop = currentScrollTop;
}

; // header
// 헤더 메뉴에 hover 했을때 헤더 스타일 바꾸기 (reveal 클래스 추가)

var atagHover = HEADER.querySelectorAll('nav a');
atagHover.forEach(function (aTag) {
  aTag.addEventListener('mouseover', function () {
    HEADER.classList.add('reveal');
  });
  aTag.addEventListener('mouseout', function () {
    var currentScrollTop = document.documentElement.scrollTop;

    if (HEADER.clientHeight > currentScrollTop) {
      HEADER.classList.remove('reveal');
    }
  });
}); // footer
// 푸터 드롭다운 메뉴 펼치기

var footerDropdown = document.querySelectorAll('.footer__dropdown > a, .footer__dropdown button');
footerDropdown.forEach(function (item) {
  item.addEventListener('click', function () {
    var dropdownParent = item.parentElement;
    var dropdownChild = item.nextElementSibling;
    dropdownParent.classList.toggle('footer__dropdown--active');
    dropdownChild.style.height = "${dropdownChild.offsetHeight}";
  });
});
},{}]},{},["yUAd"], null)
//# sourceMappingURL=main.dfa9e900.js.map