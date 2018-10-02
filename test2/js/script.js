let bgColorQuestion = prompt("Какой будет фон у страницы?");
let bgColor = document.querySelector('body');
bgColor.style.backgroundColor = bgColorQuestion;

let fontColorQuestion = prompt("Какой будет цвет текста на странице?");
let fontColor = document.querySelector('.page');
fontColor.style.color = fontColorQuestion;

let inspireQuestion = prompt("Как зовут человека, который вас вдохновляет?");
let inspire = document.querySelector('.name');
inspire.innerHTML = inspireQuestion; 

let picQuestion = prompt("Введите адрес картинки.");
let image = document.querySelector('img');
image.setAttribute('src', picQuestion); 

let textQuestion = prompt("Введите текст страницы.");
document.querySelector('.shortBio').innerHTML = textQuestion; 

document.querySelector('.shortBio').className += ' animated';