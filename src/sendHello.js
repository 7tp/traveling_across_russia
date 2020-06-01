const localSt = [];

const open = () => {
    $('.popup').addClass('popup__opened');
}

const sendMoreHello = () => {
    $('.popup__title').html("Передать привет Ирине");
    $('.popup__form').removeClass('popup__hide');
    $('.popup__button').html('Отправить');
    $('.popup__send-more-button').addClass('popup__hide');

}

const close = () => {
    $('.popup').removeClass('popup__opened');
    sendMoreHello();
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
    $('.popup__send-more-button').removeClass('popup__hide');
    open();
}

$('.popup__send-more-button').click(() => {
    sendMoreHello();
})
   
export default function sendHello() {
    event.preventDefault();
 
   /*const post = $.ajax({
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
