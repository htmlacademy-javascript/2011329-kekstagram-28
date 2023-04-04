import './consts.js';
import './util.js';
import './data.js';
import {createPost} from './data.js';
import {drawMiniatures} from './miniatures.js';

const similarComments = Array.from({length: 25}, createPost);

drawMiniatures(similarComments);

