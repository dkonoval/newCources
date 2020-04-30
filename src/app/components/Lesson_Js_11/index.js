import jQuery from 'jquery';


fetch('https://reqres.in/api/users')
.then(function(response) {
    debugger
    if (response.ok) {
        return response.json()
    }
})
.then(function(json) { 
  console.log(json);
})

// 200 и все с 2-ки - прошло успешно
// 4-ки - прошло с ошибкой, неправильный урл или нет сессии пользователя
// 5-ки - Ошбики на сервере


//Типы запросов

/*
    1. GET - получение данных
    fetch('https://reqres.in/api/users')
    ? название параметра = значение & название параметра = значения
    https://jsonplaceholder.typicode.com/posts?userId=1 

    2.POST - создание данных
    var user = {
        name: 'Darya',
        age: 26
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(user)
    })


    3. PUT - изменения данных

     fetch('https://jsonplaceholder.typicode.com/posts/ID_POST', {
        method: 'PUT',
        body: JSON.stringify(user)
    })

    4. DELETE - удаления данных

     fetch('https://jsonplaceholder.typicode.com/posts/ID_POST', {
        method: 'DELETE'
    })
*/



class Posts {
    constructor(obj) {
        this.postsList = []
        this.userId = obj.userId
        this.postListsHolder = obj.postListsHolder;
    }

    init() {
        this.getPostsList();
    }
    getPostsList(id) {
        const _self = this; 
        fetch(`https://jsonplaceholder.typicode.com/posts${id ? '?userId=' + id : ''}`)
            .then(function(response) {
                if(response.ok) {
                    return response.json()
                }
            })
            .then(function(res) {
                _self.postsList = res;
                _self.drawPosts(res)
            })
    }
    filter() {
        //TODO Filter method
    }

    drawPosts(posts) {

        const _self = this;
            posts.map(function(item) {
                return new PostItem({
                    ...item,
                    postListsHolder: _self.postListsHolder
                }).init()
        })
    }

    addNewPost() {
        //TODO POST fetch on add new post
    }
}


class PostItem {
    constructor(obj) {
        this.id = obj.id
        this.body = obj.body
        this.title = obj.title
        this.postListsHolder = obj.postListsHolder
    }

    init() {
        
        this.drawPostItem();
        this.initClickOnDeleteButton();
    }

    drawPostItem() {
        const _self = this;
        jQuery(this.postListsHolder).append( `<div class = "postsList__item" data-id = "${_self.id}">
            <h2>${_self.title}</h2>
            <p>${_self.body}</p>
            <div class="postsList__item--buttons">
                <a class = "edit">Edit</a>
                <a class = "delete" onclick = "${_self.deleteItem()}">Delete</a>
            </div>
        </div>`)
    }
    initClickOnDeleteButton() {
        const _self = this;
        
        jQuery(`#${this.id + "delete"}`).on('click', function() {
            _self.deleteItem()
        })
    }
    deleteItem() {
       
        const _self = this;
        fetch('https://jsonplaceholder.typicode.com/posts/' + this.id, {
            method: 'DELETE'
        }) 
        .then(function(res) {
            if(res.ok) {
                jQuery(`[data-id = "${_self.id}"`).remove()
            }
        }) 
    }

    editItem() {
        //TODO edit item and PUT fetch
    }
}

var test = new Posts({
    userId: 'Test',
    postListsHolder: '.postsList__row'
})

test.init()