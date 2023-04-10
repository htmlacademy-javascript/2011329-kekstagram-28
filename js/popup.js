import {posts} from './main.js';

const fullSizePicture = document.querySelector('.big-picture');

const closeBigPicture = () => {
  fullSizePicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const appendComment = (comments) => {
  fullSizePicture.querySelector('.social__comment-count').classList.add('hidden');
  fullSizePicture.querySelector('.comments-loader').classList.add('hidden');

  const commentsConteiner = fullSizePicture.querySelector('.social__comments');
  const commentElement = commentsConteiner.querySelector('.social__comment').cloneNode(true);
  commentsConteiner.innerHTML = '';

  comments.forEach((comment) => {
    const cloneElement = commentElement.cloneNode(true);
    cloneElement.querySelector('img');
    cloneElement.querySelector('img');
    cloneElement.querySelector('p').innerHTML = comment.message;
    commentsConteiner.appendChild(cloneElement);
  });
};

export const showBigPicture = () => {
  document.querySelectorAll('.picture').forEach((picture) => picture.addEventListener('click', (e) => {
    const id = e.target.closest('.picture').dataset.id;
    const currentPost = posts.find ((post) => String(post.id) === id);

    // eslint-disable-next-line no-console
    console.log(currentPost);

    fullSizePicture.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');

    fullSizePicture.querySelector('.big-picture__img img').src = currentPost.url;
    fullSizePicture.querySelector('.likes-count').innerHTML = currentPost.likes;
    fullSizePicture.querySelector('.comments-count').innerHTML = currentPost.comments.length;

    appendComment(currentPost.comments);

    fullSizePicture.querySelector('#picture-cancel').addEventListener('click', closeBigPicture);
    window.addEventListener('keydown', ({key}) => {
      if (key === 'Escape') {
        closeBigPicture();
      }
    });
  }));
};

