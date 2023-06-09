const galleryEl = document.querySelector('.js-gallery');
const bannerImgEl = document.querySelector('.js-banner__img');

const onGalleryItemElClick = event => {
  const { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }

  const bannerUrl = target.dataset.bannerUrl;

  bannerImgEl.src = bannerUrl;
};

galleryEl.addEventListener('click', onGalleryItemElClick);

const addSrcAttrToImg = () => {
  const galleryImgEls = document.querySelectorAll('.js-gallery__img');

  galleryImgEls.forEach(el => {
    el.src = el.dataset.src;
  });
};

const createLazySizesScript = () => {
  const script = document.createElement('script');

  script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';

  return script;
};

if ('loading' in HTMLImageElement.prototype) {
  addSrcAttrToImg();
} else {
  document.body.append(createLazySizesScript());
}
