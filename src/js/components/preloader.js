document.addEventListener("DOMContentLoaded", () => {

  const images = document.images
  const imagesCount = images.length
  let imagesLoaded = 0
  const preloader = document.querySelector('[data-preloader]')
  const preloaderImg = document.querySelector('[data-preloader-img]')

  const imageLoaded = () => {
    imagesLoaded++;
    let perc = (((100 / imagesCount) * imagesLoaded) << 0);
    let percY = 100 - (perc * 2);
    let percX = -100 + (perc * 2);
    let pos = 0 + perc;

    preloaderImg.setAttribute('style', `transform:translate(${percX}%, ${percY}%); left: ${pos}%; bottom: ${pos}%;`)

    if (imagesLoaded >= imagesCount) {
      if (!preloader.classList.contains('done')) {
        preloader.classList.add('done')
      }
    }
  }

  for (let i = 0; i < imagesCount; i++) {
    const imageClone = new Image();
    imageClone.onload = imageLoaded;
    imageClone.onerror = imageLoaded;
    imageClone.src = images[i].src;
  }

})