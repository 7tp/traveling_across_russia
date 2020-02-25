import './index.css';

const localSt = [];

const open = () => {
    $('.popup').addClass('popup__opened');
}

const close = () => {
    $('.popup').removeClass('popup__opened');
    $('.popup__title').html("Передать привет Ирине");
    $('.popup__form').removeClass('popup__hide');
    $('.popup__button').html('Отправить');

}

$('.hello-button').click(() => {
    open();
})

$('.popup__close').click(() => {
    close();
})

const message = (e) => {
    $('.popup__title').html(e);
    $('.popup__form').addClass('popup__hide');
    open();
}
   
const sendHello = () => {
    event.preventDefault();
 
   /*var post = $.ajax({
        url: "/messages.html",
        data: {json: JSON.stringify({
                name: $('.popup__input-name').val(),
                text: $('.popup__input-text').val()
            })} ,
        type: "POST"
    });
    
    post.done(function(p){
        alert(`Спасибо, ${$('.popup__input-name').val()}!`);
    });
    
    post.fail(function(){
        alert(`Ваш привет не может быть доставлен, повторите, пожалуйста, ${$('.popup__input-name').val()}`);
    }); */

    const defer = $.Deferred();
    
    defer.done((e) => {
        localSt[localSt.length] = {
            name: $('.popup__input-name').val(),
            text: $('.popup__input-text').val()
        }
     /*   const locSt = localSt.concat(
            {name: $('.popup__input-name').val(),
            text: $('.popup__input-text').val()}
        ); */
        console.log(localSt);
        localStorage.setItem('hello', JSON.stringify(localSt));
        $('.popup__button').html('Отправляю...');
        return message(e);
    })

    defer.resolve(`Спасибо, ${$('.popup__input-name').val()}!`);

    defer.reject(`Ваш привет не может быть доставлен, повторите, пожалуйста, ${$('.popup__input-name').val()}`);
}    

$('.popup__button').click(() => sendHello())
