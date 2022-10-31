export function loadImages(urls) {
  return Promise.all(urls.map(url => loadImage(url)))
}
export function loadImage(url) {
  return new Promise(resolve => {
    const img = document.createElement('img')
    img.src = url
    img.addEventListener('load', () => {
      resolve(img)
    })
  })
}