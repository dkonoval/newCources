

function showMessage(personAge, message = 'Default message') {
   
    switch(personAge) {
        case '15': 
            console.log(message + 'Young')
            break;
        case '25': 
            console.log('Middle')
            break;
    
        case '45': 
            console.log('Old')
            break;
    
     }
}

var testReturn = showMessage('15');

console.log(showMessage);
console.log(showMessage('15'));

var myArr = ['Darya', 'Vasia', 'Olya', 'Sonya', 'Andrey'];


// Добавление в конец массива
myArr.push('5')

debugger
//Добавление в начало массива
myArr.unshift('1')

debugger
//Удалить первый элемент из массива
myArr.shift();

debugger
//Удалить последний элемент массива
myArr.pop();

console.log(myArr.length);

for(var i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}

for(let item of myArr) {
    console.log(item)
}

for(let i in myArr) {
    console.log(i)
}
//Метод для удаления элемента из массива
myArr.splice(2, 1)

debugger
console.log(myArr)

//Создать новый массив из имеющегося 
var newArr = myArr.slice(2, 4)

debugger
console.log(newArr)

//Объединение массивов

var longArr = myArr.concat(newArr, [1, 2, 3], [true]);
console.log(myArr.concat(newArr, [1, 2, 3], [true]))


//Метод для перебора массива

longArr.forEach( function(item, index) {
    console.log(item + '-----' + index)
})

//Метод поиска в массиве

var findIndex = longArr.indexOf('Vasia123123')
if(findIndex > -1) {
    console.log('Element exists in arr')
} else {
    console.log('No element in arr')
}
