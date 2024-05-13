/*
Задание 5.

Написать код приложения, интерфейс которого состоит из поля ввода и кнопки «Получить список задач». При нажатии на кнопку нужно отправить запрос с помощью fetch на URL https://jsonplaceholder.typicode.com/users/3/todos. Число 3 представляет собой id пользователя, вместо него нужно подставить число, введенное в поле. Если пользователь с таким id существует, вернется список задач для этого пользователя, каждая задача представлена объектом вида:

{
    "userId": 3,
    "id": 43,
    "title": "tempore ut sint quis recusandae",
    "completed": true
}

Где title — описание задачи, а completed — флаг, отображающий, выполнена задача или нет. Вывести данный список на страницу, оформив соответствующим образом: в виде списка (ul или ol), выполненные задачи должны быть написаны зачеркнутым текстом. Если пользователь с введенным id не существует, вывести сообщение: «Пользователь с указанным id не найден».
*/

const btn = document.querySelector('#reqwest');
const textField = document.querySelector('input');
const todoList = document.querySelector('.todo');
const title = document.querySelector('h3');
document.querySelector('input').addEventListener('click', () => {
    todoList.innerHTML = "";
    title.innerHTML = "";
})

btn.addEventListener('click', () => {
    let userId = textField.value ? textField.value : 0;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then((response) => {
            const result = response.json();
            return result;
        })
        .then((data) => {
            return new Promise((resolve, reject) => {
                if (data.length) {
                    resolve(data);
                } else {
                    reject()
                }
            })
        })
        .then((data) => {
            title.innerHTML = `Список задач пользователя с ID = ${userId} :`
            for (let i = 0; i < data.length; i++) {
                const newTodo = document.createElement("li");
                const newTodoContent = document.createTextNode(data[i].title);
                newTodo.appendChild(newTodoContent);
                todoList.appendChild(newTodo);
                if (data[i].completed) {
                    newTodo.classList.add("completed");
                }
            }
        })
        .catch(() => {
            todoList.innerHTML = "";
            title.innerHTML = `Пользователь с ID = ${userId} не найден.`;
        })
    textField.value = '';

})