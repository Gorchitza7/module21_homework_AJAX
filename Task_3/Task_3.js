/*
Задание 3.

Написать скрипт, который при открытии страницы будет делать следующее:

Если пользователь зашел в первый раз, вывести окно prompt с сообщением: 
«Добро пожаловать! Назовите, пожалуйста, ваше имя».

После того, как пользователь введет имя, записать имя, дату и время визита в localStorage.

Если пользователь открывает страницу не впервые (это можно узнать по наличию соответствующих записей в localStorage), 
вывести в alert сообщение вида: «Добрый день, *имя пользователя*! Давно не виделись. В последний раз вы были у нас 
*дата последнего посещения*» и перезаписать дату последнего посещения.

Дату можно вывести в любом удобочитаемом формате (не Timestamp, 
должен четко читаться день, месяц, год и время — часы и минуты).
*/

let userNameJson = localStorage.getItem('myKey');
let userName = '';
let date = '';

function createVisit() {
  let dateVisit = new Date();
    date = dateVisit.toLocaleString();
    localStorage.setItem('lastVisit', JSON.stringify(date));
};

if (userNameJson) {
    userName = JSON.parse(userNameJson);  
    let visitTimeJson = localStorage.getItem('lastVisit');
    date = JSON.parse(visitTimeJson);
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${date}`);
    createVisit();
} else {
    userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem('lastVisit', JSON.stringify(userName));
    createVisit();
};