const cars = ['Mazda', 'Ford', 'BMW', 'Mer']
const people = [
    {name: 'Karoline', budget: 4200},
    {name: 'Elena', budget: 1200},
    {name: 'Vika', budget: 7200},
]
const fib = [1, 1, 2, 3, 4, 8, 13]

// Function
function addItemToEnd() {

}

// Method
// cars.push('Porsche')
// cars.unshift('Lada')
//
// const firstItem = cars.shift()
// const lastCar = cars.pop()
// console.log(firstItem)
// console.log(lastCar)
// console.log(cars)
//
// console.log((cars.reverse()))

// const index  = cars.indexOf('BMW')
// cars[index] = 'Porsche'
// console.log(cars)
// let findedPerson
// for (const person of people) {
//     console.log(person)
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// const index  = people.findIndex(function (person) {
//     return person.budget === 4200
// })
// const person  = people.find(function (person) {
//     return person.budget === 4200
// })
// const person = people.find(person => person.budget === 4200)
// console.log(person)

// console.log(cars.includes('Mazda'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
//
const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(filteredNumbers)


// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const allBudzhet = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)

console.log(allBuszhet)