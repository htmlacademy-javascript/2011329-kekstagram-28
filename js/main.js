import './consts.js';
import './util.js';
import './data.js';
import {createPost} from './data.js';
import {drawMiniatures} from './miniatures.js';
import {showBigPicture} from './popup.js';

export const posts = Array.from({length: 25}, createPost);

drawMiniatures(posts);

showBigPicture();

