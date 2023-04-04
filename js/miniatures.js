//Нашли template в документе и получили содержимое, фрагмент
const miniatureTemplate = document.querySelector('#picture').content;
//Нашли нужный шаблон
const container = document.querySelector('.pictures');

const createMiniature = function ({comments, description, likes, url}) {
  const miniature = miniatureTemplate.cloneNode(true);

  //Адрес изображения url подставьте как атрибут src изображения
  miniature.querySelector('.picture__img').src = url;
  miniature.querySelector('.picture__img').alt = description;
  //Количество лайков likes выведите в блок .picture__likes
  miniature.querySelector('.picture__likes').textcontent = likes;
  //Количество комментариев comments выведите в блок .picture__comments
  miniature.querySelector('.picture__comments').textcontent = comments.length;

  return miniature;
};

const drawMiniatures = function (picture) {
  //Создает новую пустую область DocumentFragment, в которую можно добавлять узлы DOM для построения внеэкранного дерева DOM.
  const fragment = document.createDocumentFragment();
  //Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
  picture.forEach((pictures) => {
    const mini = createMiniature(pictures);
    fragment.append(mini);
  });

  container.append(fragment);
};

export {drawMiniatures};

