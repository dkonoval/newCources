import $ from 'jquery'

import 'slick-carousel';

$('.myCarousel').slick({
    dots: true,
    speed: 300,
    slidesToShow: 2,
    infinite: true,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1
          }
        }
      ]
});



var person = {};  


person.name = 'Darya';
person.age = 26;
person.callName = function() {
   // console.log('Darya')
}


//console.log(person['name'])

// Delete object property
//delete person['name']

//console.log('callName' in person);

for(let i in person) {
    //console.log(i);
   // console.log(person[i])
}

let user = {
    uid: '12312323313123',
    password: 123123123,
    email: 'mymolkobob@gmail',
    name: 'Vasia',
    address: {
        city: 'minsk',
        country: 'belarus'
    },
    callMyName() {
        console.log(this.name)
    }
}

function callUId() {
    console.log(this.uid)
}

let currentUser = Object.assign({}, user) ;
currentUser.uid = 'Darya';

currentUser.func = callUId;
user.func = callUId;

user.func();
currentUser.func();

//Копирование по ссылке
let person__Copy = person;

//Клонирование объекта
let person__cloneObject = Object.assign({}, person)

//Объединение объектов
let assign__cloneObject = Object.assign(person, user)
console.log(assign__cloneObject);

let newObjAssign__User =  Object.assign({}, user)

newObjAssign__User.address.city = 'Gomel' 

//Значение city изменится для обоих объектов
console.log(newObjAssign__User);
console.log(user)

function ConstructorPerson(name, age) {
    this.name = name;
    this.age = age;
}

let userFromCoundtructor = new ConstructorPerson('Julia', 40);

console.log(userFromCoundtructor.name)
