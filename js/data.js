import {DESCRIPTION, MESSAGES, NAMES} from './consts.js';

import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const randomPostId = createRandomIdFromRangeGenerator(1, 25);

const randomImageId = createRandomIdFromRangeGenerator(1, 25);

const createRandomeLike = createRandomIdFromRangeGenerator(15, 200);

const createRandomeIndexId = createRandomIdFromRangeGenerator(1, 1500);

function createRandomUrl () {
  return `photos/${randomImageId()}.jpg`;
}

function createRandomAvatar () {
  return `img/avatar-${getRandomInteger(1, 6)}.svg`;
}

function createRandomComment() {
  return {
    id: createRandomeIndexId(),
    avatar: createRandomAvatar(),
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
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
}

export {createPost};

