const id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const url = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const description = [
  'Закат',
  'Цветы',
  'Спортивный атомобиль',
  'Стая волков',
  'Награждение победителей',
  'Встреча глав государств',
  'кот Кекс',
];

const likes = [15, 33, 58, 76, 94, 115, 200];

const comments = [
  {id: 135, avatar: 'img/avatar-1.svg', message: 'Всё отлично!', name: 'Артём',},
  {id: 136, avatar: 'img/avatar-2.svg', message: 'В целом всё неплохо. Но не всё.', name: 'Максим',},
  {id: 137, avatar: 'img/avatar-3.svg', message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', name: 'Алексей',},
  {id: 138, avatar: 'img/avatar-4.svg', message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', name: 'Роман',},
  {id: 139, avatar: 'img/avatar-5.svg', message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', name: 'Даниил',},
  {id: 140, avatar: 'img/avatar-6.svg', message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', name: 'Сергей',},
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createObject = () => ({
  index: getRandomArrayElement(id),
  way: getRandomArrayElement(url),
  explanation: getRandomArrayElement(description),
  likesCounter: getRandomArrayElement(likes),
  comment: getRandomArrayElement(comments),
});

const similarObject = Array.from({length: 25}, createObject);

console.log(similarObject);
