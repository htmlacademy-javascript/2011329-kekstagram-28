import {DESCRIPTION, MESSAGES, NAMES} from './consts.js';

import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const randomPostId = createRandomIdFromRangeGenerator(1, 25);

function createRandomUrl () {
  return `photos/${getRandomInteger(1, 25)}.jpg`;
};

const createRandomeLike = createRandomIdFromRangeGenerator(15, 200);

const createRandomeIndexId = createRandomIdFromRangeGenerator(1, 1500);

function createRandomAvatar () {
  return `img/avatar-${getRandomInteger(1, 6)}.svg`;
};

function createRandomComment() {
  return {
    id: createRandomeIndexId(),
    avatar: createRandomAvatar(),
    messege: getRandomArrayElement(MESSAGES),
    names: getRandomArrayElement(NAMES),
  };
}

function createPost() {
  const numberOfComments = getRandomInteger(1, 10);
  return {
    id:  randomPostId(),
    url: createRandomUrl(),
    description: getRandomArrayElement(DESCRIPTION),
    likes: createRandomeLike(),
    comments: Array.from({length: numberOfComments}, createRandomComment),
  };
};

const similarComments = Array.from({length: 25}, createPost);

console.log(similarComments);
