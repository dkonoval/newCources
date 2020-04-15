//DOMContentLoaded - загружен и обработан HTML, но не загружен конктен или внешние ресурсы (картинки, стили)

//load - все загружено 

//beforeunload/unload - перед уходом со страницы


function readyToShowMessage(n) {
    debugger
    console.log('test' + n);
}


//Привязка на событие
//document.getElementById('id').addEventListener('click', readyToShowMessage)

//document.getElementById('id').addEventListener('click', readyToShowMessage2)
/*
document.addEventListener('DOMContentLoaded', readyToShowMessage);

window.onload = function() {
    readyToShowMessage(2)
}
window.onbeforeunload = function() {
    return false
}*/