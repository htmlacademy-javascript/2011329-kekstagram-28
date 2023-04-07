const fullSizePicture = document.querySelector('.big-picture');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const minImages = document.querySelectorAll('.picture');

const openFullScreenImage = (image) => {
  image.addEventListener('click', () => {
