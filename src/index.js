import './index.css';

import sendHello from './sendHello';

import {changeLangEn, changeLangRu} from './change-lang';

$('.popup__button').click(() => sendHello());

$('.header__link_en').click(() => changeLangEn());

$('.header__link_ru').click(() => changeLangRu());