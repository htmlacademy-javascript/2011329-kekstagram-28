const miniatureTemplate = document
  .querySelector('#picture')//Ищем в HTML Template
  .content.querySelector('.picture');

const container = document.querySelector('.picture');

const createMiniatures = function ({comments, description, likes, url}) {
  const miniature = miniatureTemplate.cloneNode(true);

  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__img').alt = description;
  miniature.querySelector('.picture__comments').textcontent = comments.length;
  miniature.querySelector('.picture__likes').textcontent = likes;

  return miniature;
};

const drawMiniatures = function (pictures) {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const mini = createMiniatures(picture);
    fragment.append(mini);
  });

  container.append(fragment);
};

export {drawMiniatures};
