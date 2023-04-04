const miniatureTemplate = document.querySelector('#picture').content;//Нашли template в документе и получили содержимое, фрагмент
const container = miniatureTemplate.querySelector('.picture');//Нашли нужный шаблон

const createMiniature = function ({comments, description, likes, url}) {
  const miniature = miniatureTemplate.cloneNode(true);

  miniature.querySelector('.picture__img').src = url;//Адрес изображения url подставьте как атрибут src изображения
  miniature.querySelector('.picture__img').alt = description;
  miniature.querySelector('.picture__likes').textcontent = likes;//Количество лайков likes выведите в блок .picture__likes
  miniature.querySelector('.picture__comments').textcontent = comments.length;//Количество комментариев comments выведите в блок .picture__comments

  return miniature;
};

const drawMiniatures = function (pictures) {
  const fragment = document.createDocumentFragment();//Создает новую пустую область DocumentFragment, в которую можно добавлять узлы DOM для построения внеэкранного дерева DOM.
  pictures.forEach((picture) => {
    const mini = createMiniature(picture);
    fragment.append(mini);
  });//Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

  container.append(fragment);
};

export {drawMiniatures};

