// ESM -> 에크마 스크립트 모듈.. 자바스크립트 표준 방식 (=브라우저에서 사용되는 방식)
// CommonJS -> nodejs에서 사용하는 방식
// postcss도 브라우저가 아니라 (번들러를 통해 변환이 필요한) nodejs환경에서 동작하는 것..

// import autoprefixer from 'autoprefixer' -> ESM 방식

// const autoprefixer = require('autoprefixer')

// export -> ESM 방식
// exports {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}