//window.alert('1')
// window.prompt('вопрос')
// window.confirm('вопрос')

const heading = document.getElementById('hello')
// const heading2 =  document.getElementsByTagName('h2')[0] устарело
// const heading2 =  document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('h2')
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello') //возвращает всегда первый и один элемент
const heading2 = document.querySelector('h2')
console.dir(heading2)

// const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll("h2")
console.log(h2List)
const heading3 = h2List[h2List.length - 1]
console.log(heading3)

setTimeout( () => {
    addStylesTo(heading, 'JavaScript')
    },2000)


const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('click', event.target.getAttribute('href'))
    const url = event.target.getAttribute ('href')

    window.location = url
})
setTimeout( () => {
    addStylesTo(link, 'Практикуйся', 'black')
},3000)

setTimeout( () => {
    addStylesTo(heading2, 'И все получится', 'yellow', '2em')
},4500)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.background = 'blue'
    node.style.padding = '10px'
    node.style.display = 'block'
    node.style.width = '100%'
    // false: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}
// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'green'
        heading.style.backgroundColor = 'white'
    }
    else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'blue'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
    heading2.style.color = 'green'
    heading2.style.backgroundColor = 'white'
}
else {
    heading2.style.color = 'yellow'
    heading2.style.backgroundColor = 'blue'
}
})

