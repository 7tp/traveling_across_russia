import './index.css';

import sendHello from './js/sendHello';
import {changeLangEn, changeLangRu} from './js/change-lang';

$('.popup__button').click(() => sendHello());

$('.header__link_en').click(() => changeLangEn());

$('.header__link_ru').click(() => changeLangRu());