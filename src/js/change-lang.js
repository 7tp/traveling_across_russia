import { english, russian } from "./constants";

function changeLangEn() {
    $('.header__link_en').addClass('header__link_selected');
    $('.header__link_ru').removeClass('header__link_selected');
    $('.lead__title').text(english.leadTitle);
    $('.lead__subtitle').text(english.leadSubtitle);
    $('.lead__caption').text(english.leapCaption);
    $('.intro__title').text(english.introTitle);
    $('.intro__text').text(english.introText);
    $('.intro__bold').each((i, element) => {
        $(element).text(english.introContent[i]);
    });
    $('.places__title').each((i, element) => {
        $(element).text(english.placesTitle[i]);
    });
    $('.places__paragraph-item').each((i, element) => {
        $(element).text(english.placesParagraphItem[i]);
    });
    $('.video__title').text(english.videoTitle);
    $('.video__subtitle').text(english.videoSubtitle);
    $('.comments__content-title').text(english.commentContentTitle);
    $('.comments__content-subtitle').text(english.commentContentSubtitle);
    $('.comments__quote').each((i, element) => {
        $(element).text(english.commentsQuote[i]);
    });
    $('.comments__author').each((i, element) => {
        $(element).text(english.commentAuthor[i]);
    });
    $('.cover__title').text(english.coverTitle);
    $('.cover__subtitle').text(english.coverSubtitle);
    $('.footer__link').each((i, element) => {
        $(element).text(english.footerLink[i]);
    });
    $('.footer__copyright').html('&copy;' + english.footerCopyright);
    $('.popup__title').text(english.popupTitle);
    $('.popup__button').text(english.popupButton);
    $('.popup__send-more-button').text(english.popupSendMoreButton);
    $('.popup__all-greetings').text(english.popupAllGreetings);
    $('.popup__input-name').attr("placeholder", "Your Name");
    $('.popup__input-text').attr("placeholder", "Text of Greeting");
}

function changeLangRu() {
    $('.header__link_ru').addClass('header__link_selected');
    $('.header__link_en').removeClass('header__link_selected');
    $('.lead__title').text(russian.leadTitle);
    $('.lead__subtitle').text(russian.leadSubtitle);
    $('.lead__caption').text(russian.leapCaption);
    $('.intro__title').text(russian.introTitle);
    $('.intro__text').text(russian.introText);
    $('.intro__bold').each((i, element) => {
        $(element).text(russian.introContent[i]);
    });
    $('.places__title').each((i, element) => {
        $(element).text(russian.placesTitle[i]);
    });
    $('.places__paragraph-item').each((i, element) => {
        $(element).text(russian.placesParagraphItem[i]);
    });
    $('.video__title').text(russian.videoTitle);
    $('.video__subtitle').text(russian.videoSubtitle);
    $('.comments__content-title').text(russian.commentContentTitle);
    $('.comments__content-subtitle').text(russian.commentContentSubtitle);
    $('.comments__quote').each((i, element) => {
        $(element).text(russian.commentsQuote[i]);
    });
    $('.comments__author').each((i, element) => {
        $(element).text(russian.commentAuthor[i]);
    });
    $('.cover__title').text(russian.coverTitle);
    $('.cover__subtitle').text(russian.coverSubtitle);
    $('.footer__link').each((i, element) => {
        $(element).text(russian.footerLink[i]);
    });
    $('.footer__copyright').html('&copy;' + russian.footerCopyright);
    $('.popup__title').text(russian.popupTitle);
    $('.popup__button').text(russian.popupButton);
    $('.popup__send-more-button').text(russian.popupSendMoreButton);
    $('.popup__all-greetings').text(russian.popupAllGreetings);
    $('.popup__input-name').attr('placeholder', 'Имя отправителя');
    $('.popup__input-text').attr('placeholder', 'Текст привета');
}

export {changeLangEn, changeLangRu}