// 1 Переменные
//
// const firstName = 'Caroline'
//
// // const age = 22 // number
// const isProgrammer = true // boolean
//
// const _ = 'private'
// const $ = 'some value'
//
// // const if = 'mkef' // err
// const withNum5 = '5'
// // const 5withNum = 5 // err

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2021
// const birthYear = 1999

// const age = currentYear - birthYear

// const a = 10
// const b = 5
//
// let c = 32
// //c = c + a
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Caroline'
// const age = 22
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null) // Не возвращает то, что нужно

// 5 Приоритет операторов
// const fullAge = 22
// const birthYear = 1999
// const currentYear = 2021
//
// // > < >= <=
// const isFullAge = (currentYear - birthYear) >= fullAge
// console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в стадии разработки')
// } else {
//     console.log('Курс не получився')
// }

 const isReady = true;
// if (isReady) {
//     console.log('Все готово!')
// } else {
//     console.log('Все не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции

// function calculateAge(year) {
//     return 2020 - year
//
// }
//
// const myAge = calculateAge(1999)
// console.log(myAge)
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('Человек по имени '+ name + ' сейчас имеет возраст '+ age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
//
// }
//
// logInfoAbout('Крол', 1999)
// logInfoAbout('Хто я', 2222)

// 9 Массивы

//const  cars =  new Array('Мазда', 'Мерседес')
// console.log(cars.length)
// console.log(cars[2])
//
// cars[0] = 'Порш'
// cars[cars.length] = 'Лошадь'
// console.log(cars)

// 10 Циклы
const cars = ['Мазда', 'Мерседес', 'Форд'] //правильный вариант

// for (let i = 0; i < cars.length; i++) {
//    console.log(cars[i]);
// }
//
// for (let car of cars) {
//     console.log(car)  //цикл for of
// }

// 11 Объекты
const person = {
    firstName: 'Caroline',
    lastName: 'Surkova',
    year: 1999,
    language: ['Ru', 'En'],
    hasWife: false,
    greet: function () {
        console.log('greet')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'language'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
person.greet()
