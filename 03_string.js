// const name = 'Caroline'
// const age = 22
//
// function getAge() {
//     return age
// }
//const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет`
// console.log(output)

// const output =  `
// <div>This is div</div>
// <p>this is p</p>
// `
// console.log(output)

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('aro'))
// console.log(name.startsWith('Car'))
// console.log(name.endsWith('ine'))
// console.log(name.repeat(3))
//
// const string = '           password       '
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    console.log(s,name,age)
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Каролина'
const personAge = -1
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}`

console.log(output)
