//Восстановить порядок в меню, добавить пятый пункт
let menuItem = document.querySelector('.menu'),
    menuItemChild = document.querySelectorAll('.menu-item'),
    menuFive = document.createElement('li');

menuFive.classList.add('menu-item');
menuFive.innerHTML = 'Пятый пункт';
menuItem.appendChild(menuFive);
menuItem.insertBefore(menuItemChild[2], menuItemChild[1]);
//Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

//Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

let newTitle = document.getElementById ('title');

newTitle.textContent = 'Мы продаем только подлинную технику Apple';


//Удалить рекламу со страницы

let advert = document.querySelector('.adv');
advert.remove();

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

let requestUser = prompt ('Как вы относитесь к технике Aplle'),
    responseUser = document.getElementById ('prompt');
    responseUser.textContent = requestUser;