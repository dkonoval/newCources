



var test = prompt('Enter number');
console.log(test);

if(test > 5) {
    console.log('Long name')
} else if(test <= 5 && test > 3) {
    console.log('Medium name')

}  else {
    console.log('Short name')
}

//Приведение типов

//1. К строке

var VasiaAge = 3;
var VasiaAddress = '12'

console.log(3 + '123123')

console.log(String(true) === 'true');

//2. К числу

//Операции сравнения
console.log(1 == true)

//Унарный оператор сложения

console.log(+true)

//Функция Number

console.log(Number(true))

// К Boolean

console.log(!'123123')

console.log(Boolean('123123'))



var testArray = [1, 2, true, 4, 'Test']

var testObject = {
    name: 'Darya',
    age: 26
}

var i = 0;

while(i < 5) {

    //Тернарный оператор 
    //Условие ? Если правда : Если ложь

    testArray[i] == 2 ? console.log('Array item ' + testArray[i]) : console.log('Array item index' + i);
    
    if(testArray[i] == 2) {
        console.log('Array item ' + testArray[i])
    } else {
        console.log('Array item index' + i)
    }
    i = i + 1;
}

for(var j = 0; j < 5; j++) {
    debugger
    console.log('Array item ' + testArray[j])

}


