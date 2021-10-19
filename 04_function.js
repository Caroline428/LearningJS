// 1 Функции
// Function Declaration
// function greet(name) {
//     console.log(`привет ${name}`)
//
// }
//
// Function Expression
// const greet2 = function greet2(name) {
//     console.log('Hello', name)
// }

// greet(`Lena`)
// greet2('Lena')

// console.log(typeof greet2)
// console.dir(greet)

// 2 Анонимные функции
// let counter = 0
// const interval = setInterval(function () {
//     if(counter === 5) {
//         clearInterval(interval) // clearTimeout
//     }
//     else {
//         console.log(++counter)
//     }
//
// } , 1000)

// 3 Стреловчные функции
// function  greet(name) {
// console.log('Привет ', name)
// }
//
// const arrow = (name, age) => {
//     console.log('Привет ', name)
// }
//
// const arrow2 = name => console.log('Hello', name)
//
// const pow2 = num => num**2
//
// console.log(pow2(5))

// 4 Параметры по умолчанию
// const sum =(a =40,b = a*2) => a+b
// console.log(sum(12,4))
// console.log(sum())
//
// function sumAll(...all) {
//     console.log(all)
//     let result = 0
//     for (let num of all) {
//         result +=num
//     }
//     return result
// }
//
// const res = sumAll(1,2,3,4,5,6,4,3,2)
// console.log(res)

// 5 Замыкания
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember ('Caroline')
logWithLastName('Minim')