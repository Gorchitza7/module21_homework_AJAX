/*
Задание 4.

Создать Promise, в котором c задержкой в три секунды сгенерировать случайное целое число от 1 до 100. Для создания задержки использовать setTimeout. Если сгенерированное число четное — Promise выполнится успешно (resolve), если нечетное — выполнится с ошибкой (reject). После разрешения Promise обработать результат его выполнения и вывести сообщение в консоль:

a) «Завершено успешно. Сгенерированное число — number», если Promise завершился успешно. Вместо number подставить сгенерированное число
b) «Завершено с ошибкой. Сгенерированное число — number», если Promise завершился с ошибкой. Вместо number подставить сгенерированное число
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomValue = Math.round(Math.random() * 100)
        randomValue % 2 ? reject(randomValue) : resolve(randomValue)
    }, 3000)
})

myPromise
    .then((result) => {
        console.log("Завершено успешно. Сгенерированное число —", result)
    })
    .catch((error) => {
        console.log("Завершено с ошибкой. Сгенерированное число —", error)
    })
    .finally(() => console.log("The end"))