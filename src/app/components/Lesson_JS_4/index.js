
var sallary = ['100 ye', '130 ye', '150 ye'];

function sayHy(name) {
    console.log(name)
}
function createPureSallary(sallary) {
    for(let i = 0; i < sallary.length; i++) {
        sallary[i] = parseInt(sallary[i]);
    }
}
function sallarySum(sallary) {
    let sum = 0;
    
    for(var i = 0; i < sallary.length; i++) {
        sum += sallary[i];
    }
    return sum
}
parseInt('101 12312312sdfswerwrw1231231df')

parseFloat('123.123123 sdfsdf234234')



createPureSallary(sallary);



console.log(sallarySum(sallary))

sayHy('Dasha')
sayHy('Vasia')

sayHy('Lesha')




let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let lesha = { name: "Lesha", age: 32 };
let dasha = { name: "Dasha", age: 35 };

let users = [ vasya, petya, masha, lesha, dasha ];


function createUserArray(users) {
    let newArr = [];
    for(let i = 0; i < users.length; i++) {
        newArr.push(users[i].name)
    }
    return newArr
}

console.log(createUserArray(users))

let userNames = ['Dasha', "Маша"]

//Найдет индекс элемента в массиве, принимает как параметр сам элемент
let res2 = userNames.indexOf("Маша")

//Найдет индекс элемента в массиве, принимает как параметр функцию поиска

let res = users.findIndex(function(item, index) {
    debugger
    return item.name ==  "Маша"
})

//Найдет элемента в массиве, принимает как параметр функцию поиска

let resItem = users.find(function(item, index) {
    debugger
    return item.name ==  "Маша"
})


//Найдет ВСЕ элементы в массиве, принимает как параметр функцию поиска

let allUsersAgeBefore30 = users.filter(function(item, index) {
    return item.age <= 30 && item.age != 25 && item.name != "Петя"
})


//Преобразование элементов массива

let numberSallary = sallary.map(function(item, index) {
    return parseInt(item)
})

//Сортировка элементов в массиве
numberSallary.sort();

//Обратная последовательность элементов в массиве
numberSallary.reverse();


let sallaryString = '100, 145, 590, 50';

//Разбить строку по параметру, который передаем в функцию, на элементы массива
var sallaryFromString = sallaryString.split(', ')

//Собрать элементы массива в строку через разделитель, который передаем как параметр функции
sallaryFromString.join('')

//console.log(Array.isArray(sallaryFromString))

//Окружение страницы
console.log(window)

//Элементы Dom, функции взаимодействия с элементами дом - дерева

console.log(document)

// HEAD
console.log(document.head)

//BODY
console.log(document.body)

//Все первые потомки от body
document.body.childNodes
document.body.firstChild
document.body.lastChild
document.body.lastChild.previousSibling
document.body.firstChild.nextSibling

//Получение элементов
document.body.children
document.body.lastElementChild
document.body.firstElementChild
document.body.firstElementChild.nextElementSibling
document.body.lastElementChild.previousElementSibling
document.body.lastElementChild.previousElementSibling.parentElement

//Вернут один элемент
document.getElementById('ID ЭЛЕМЕНТА')
document.querySelector('CSS селектор')


//Вернут массив
document.querySelectorAll('CSS селектор')
document.getElementsByClassName('НАЗВАНИЕ КЛАССА')
