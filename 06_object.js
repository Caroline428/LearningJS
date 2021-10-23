const person = {
    name: 'Karoline',
    age: 22,
    isProgrammer: true,
//    'complex key': 'complex value',
//    ['key_' + (1+3)]: 'computed key',
    languages: ['ru', 'en', 'de'],
    greet() {
        console.log('greet from person')
    },
    info() {
        console.info('Информация про человека по имени:', this.name)
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
//
// person.greet()
//
// person.age++
// person.languages.push('by')
//
// person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person //можно ставить значение по умолчанию(10) но оно не будет установлено, если уже есть какое-то заданное значение, работает только при indefined
//
// console.log(name, personAge, languages)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value:', person[key])
//     }
// }

// const keys = Object.keys(person)
// keys.forEach((key) =>
//     {
//         console.log('key:', key)
//         console.log('value:', person[key])
//     }
// )

// Context
// person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },

    keysAndValues() {
        // const keys = Object.keys(this)
        // keys.forEach((key) =>
        // {
        //     console.log('key:', key)
        //     console.log('value:', this[key])
        // })
        //const self =  this
        Object.keys(this).forEach(function(key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },

    withParams( top = false, between = false, bottom = false) {
        if (top) {
            console.log('-----Start-----')
        }

        const keys = Object.keys(this)
        keys.forEach((key, index, array) =>
        {
            console.log('key:', key)
            console.log('value:', this[key])
            if (between && index !== array.length-1) {
                console.log('----------')
            }
        })

        if(bottom) {
            console.log('-----End-----')
        }


    }
}

// const bound = logger.keys.bind(logger)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(person)
// logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])