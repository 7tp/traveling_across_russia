
const message = JSON.parse(localStorage.getItem('hello'));
const template = document.querySelector('template').content.querySelector('.new-message');

for (let i=0; i < message.length; i++) {
    const templateClone = template.cloneNode(true);
    templateClone.querySelector('.new-message__author').textContent = message[i].name;
    templateClone.querySelector('.new-message__text').textContent = message[i].text;

    document.querySelector('.messages').appendChild(templateClone); 
    console.log(i, message[i].name, message[i].text, templateClone);

}
    