
//Переменная, которая хранит данные для отрисовки
var result = [
    {
        name: 'Product name 1',
        description: 'Test descr 1',
        imgUrl: 'https://i.pcmag.com/imagery/reviews/03xdTO0Ka4H4KvEgtSPg4c2-12..v_1569479325.jpg',
        model: 'samsung',
        color: 'red'
    },
    {
        name: 'Product name2',
        description: 'Test descr 2',
        imgUrl: 'https://i.pcmag.com/imagery/reviews/03xdTO0Ka4H4KvEgtSPg4c2-12..v_1569479325.jpg',
        model: 'iphone',
        color: 'red'
    },
    {
        name: 'Product name 3',
        description: 'Test descr 3',
        imgUrl: 'https://i.pcmag.com/imagery/reviews/03xdTO0Ka4H4KvEgtSPg4c2-12..v_1569479325.jpg',
        model: 'iphone',
        color: 'red'
    },
    {
        name: 'Product name 4',
        description: 'Test descr 4',
        imgUrl: 'https://i.pcmag.com/imagery/reviews/03xdTO0Ka4H4KvEgtSPg4c2-12..v_1569479325.jpg',
        model: 'xiaomi',
        color: 'yellow'
    },
    {
        name: 'Product name 5',
        description: 'Test descr 5',
        imgUrl: 'https://i.pcmag.com/imagery/reviews/03xdTO0Ka4H4KvEgtSPg4c2-12..v_1569479325.jpg',
        model: 'nokia',
        color: 'white'
    }
]

//Переменная в которую добавляется HTML код продукта
var phoneList = document.getElementsByClassName('phonesList__row')[0];

//Массив уникальных значений цветов
var allColors = [];

//Массив уникальных значений моделей
var allModels = [];

//Цикл, который отрисовывает все продукты на страницы
for(var a = 0; a < result.length; a++) {
    //Текущий элемент цикла
    var iterator = result[a];

    //Добавление и генераци HTML кода продукта
    phoneList.innerHTML += `
    <div class="phonesList__item" data-id = "1" data-color = "${iterator.color}" data-model = "${iterator.model}">
        <img src = "${iterator.imgUrl}">
        <p class="phonesList__item--descr">${iterator.description}.</p>
        <p class="phonesList__item--model">${iterator.model}</p>
        <div class="buttonRow">
            <span href = "/" data-id-clickitem = '${a}'>Show details</span>
            <a class="btn">Delete</a>
            <a class="addToCard">Add to card</a>
        </div>
    </div>`;

    //Проверка на уникальность и добавление элемента в массив фильтров
    allColors.indexOf(iterator.color) == -1 ? allColors.push(iterator.color) : null;
    allModels.indexOf(iterator.model) == -1 ? allModels.push(iterator.model) : null;

}


//Отрисовываем фильтры - 
//Переменная в которую добавляется HTML код фильтра

var phoneFilters = document.getElementsByClassName('phoneList__filterRow')[0];

//Строка в которой мы формируем HTML код фильтра, начинается с открывающегося тега селект
var htmlSTR = '<select>'

for(var j = 0; j < allModels.length; j++) {
    debugger
    //Добавляем в строку опшены, перебирая массив
    htmlSTR += '<option value = ' + allModels[j] + '>' + allModels[j] + '</option>'  
}
//Закрываем в строке тег селект

htmlSTR += '</select>';

//Добавляем HTML код на страницу

phoneFilters.innerHTML += htmlSTR;



phoneFilters.innerHTML += `<select>
        ${allColors.map(function(item) {
            return '<option value = ' + item + '>' + item + '</option>'                           
        })}</select>`


document.getElementsByClassName('phonesList__item')[0].innerHTML;
//Получить/ заменить  весь HTML из селектора 

document.getElementsByClassName('phonesList__item')[0].outerHTML
//Получить/ заменить  весь HTML включая тег селектора 

//Получение значений атрибутов
document.querySelector('.phonesList__item .buttonRow a').id
// id


document.querySelector('.phonesList__item .buttonRow a').href
// href

// value

document.getElementsByClassName('phonesList__item')[0].getAttribute('data-id')
//any attr by name

document.getElementsByClassName('phonesList__item')[0].setAttribute('data-id', 5)
//set any attr by name

document.getElementsByClassName('phonesList__item')[0].dataset

//Получить список всех атрибутов
document.getElementsByClassName('phonesList__item')[0].attributes

//Удалить атрибут
document.getElementsByClassName('phonesList__item')[0].removeAttribute('data-id')

//Проверить на наличие атрибута
document.getElementsByClassName('phonesList__item')[0].hasAttribute('data-id')

//СОздание элемента див
var newDiv = document.createElement('div');

//Изменение внутреннего HTML нового дива
newDiv.innerHTML = '<p>Hello world</p>'

//Изменение имени класса
newDiv.className = 'newDivHello'

//Получение всех имен классов в массиве
newDiv.classList

//Добавить новый узел в документ
document.body.append(newDiv)


//Добавить новый узел в документ в начало
document.body.prepend(newDiv)

//Добавить до выбранного элемента
document.getElementsByClassName('phonesList')[0].before(newDiv)

//Добавить после выбранного элемента
document.getElementsByClassName('phonesList')[0].after(newDiv)


var modalWindow = document.getElementsByClassName('modalTest')[0];

function showUserDetailsInformation(event) {

  //event - описание произошедшего события
  //элемент на котором произошло событие
  var currentElentClick = event.target;


  console.log(currentElentClick.dataset.idClickitem);

  //currentElentClick.dataset.idClickitem - индекс элемента на котором произошел клик


  console.log(result[currentElentClick.dataset.idClickitem])
  modalWindow.classList.add('show');
  modalWindow.getElementsByClassName('modalTest__text')[0].innerHTML = currentElentClick.dataset.idClickitem;
}


function addClickEvent() {
    var elements = document.querySelectorAll('[data-id-clickitem]');
  
    for(var i = 0; i < elements.length; i++) {
      elements[i].onclick = showUserDetailsInformation;
    }
}

addClickEvent();