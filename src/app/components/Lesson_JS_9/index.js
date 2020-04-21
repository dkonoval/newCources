import $ from 'jquery';

var usersList = [
    {
        "id": 1,
        "email": "george.bluth@reqres.in",
        "first_name": "George",
        "last_name": "Bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
        'item': true,
        'city': 'Brest',
        'job': 'Nasialnika',
        'age': '30'
        },
        {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
        'isMale': true,
        'city': 'Grodno',
        'job': 'IT',
        'age': '38'
        },
        {
        "id": 3,
        "email": "emma.wong@reqres.in",
        "first_name": "Emma",
        "last_name": "Wong",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
        'isMale': true,
        'city': 'Minsk',
        'job': 'Builder',
        'age': '52'
        },
        {
        "id": 4,
        "email": "eve.holt@reqres.in",
        "first_name": "Eve",
        "last_name": "Holt",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
        'isMale': false,
        'city': 'Minsk',
        'job': 'Teacher',
        'age': '16'
        },
        {
        "id": 5,
        "email": "charles.morris@reqres.in",
        "first_name": "Charles",
        "last_name": "Morris",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
        'isMale': true,
        'city': 'Minsk',
        'job': 'IT',
        'age': '15'
        },
        {
        "id": 6,
        "email": "tracey.ramos@reqres.in",
        "first_name": "Tracey",
        "last_name": "Ramos",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
        'isMale': true,
        'city': 'Brest',
        'job': 'Builder',
        'age': '55'
        },
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
        'isMale': true,
        'city': 'Minsk',
        'job': 'Teacher',
        'age': '12'
        },
        {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
        'isMale': false,
        'city': 'Minsk',
        'job': 'IT',
        'age': '47'
        },
        {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
        'isMale': true,
        'city': 'Minsk',
        'job': 'IT',
        'age': '70'
        },
        {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
        'isMale': true,
        'city': 'Gomel',
        'job': 'Builder',
        'age': '43'
        },
        {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
        'isMale': false,
        'city': 'Brest',
        'job': 'IT',
        'age': '89'
        },
        {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
        'isMale': true,
        'city': 'Minsk',
        'job': 'Builder',
        'age': '40'
        }
]


function ConstructorPerson(list, personsHolder, filtersHolder) {
    this.list = list;
    this.personsHolder = personsHolder;
    this.filtersHolder = filtersHolder;

    this.nameSearch = '';
    this.jobsList = '';
    this.age = ['', ''];
    this.male = '';

    this.init = function() {
        this.initPersonsList(this.list);
        this.initPersonsFilers();
        this.addEventsListeners();
    }
    this.initPersonsList = function(list) {
        const self = this;
        this.personsHolder.html('');

        list.map(function(elem, index) {

            self.personsHolder.append(` 
            <div class = "persons__list--item">
                <img src = "${elem.avatar}">
                <p>${elem.first_name} ${elem.last_name}</p>
                <a href = "mailto:${elem.email}">Email</a>
            </div>`)
        })
       
    }
    this.initPersonsFilers = function() {
        var uniqJobs = [];
        for(var i = 0; i < this.list.length; i++) {
            uniqJobs.indexOf(this.list[i].job)  == -1 ? uniqJobs.push(this.list[i].job) : null;
        }
        uniqJobs.map(function(elem, index) {
            $('#jobsList').append(`<option value = "${elem}">${elem}</option>`)
        })
       
    }
    this.addEventsListeners = function() {
        const self = this;

        $('#submit').on('click', function() {
            self.filtering();
        })

        $('#nameSearch').on('change', function(e) {
            
            self.nameSearch = e.target.value;
        })
        $('#male').on('change', function(e) {
            
            self.male = e.target.checked;
        })
        $('#jobsList').on('change', function(e) {
            
            self.jobsList =  $(this).children("option:selected").val();
        })

    }
    this.filtering = function() {
        debugger
        const self = this;
        var newArr = this.list.filter(function(item) {
            return item.first_name.indexOf(self.nameSearch) > -1 && (self.jobsList === '' || self.jobsList == item.job) && (self.male === '' || self.male == item.isMale) 
        })
        this.initPersonsList(newArr)
    }
}

let personListForm = new ConstructorPerson(usersList, $('.persons__list'), $('.persons__filters'));

personListForm.init();