function addScript(callback, callError) {
    return new Promise( function(resolve, reject) {
        let script = document.createElement('script')
        script.src = 'https://code.jquery.com/jquery-3.5.0.mi1n.js';
    
        script.onload = function(val) {
            resolve(val)  
        }
        debugger
        script.onerror = function(val) {
            reject(val) 
        }
        document.body.appendChild(script)
    })
}

var myPromise = [fetch('https://reqres.in/api/users'), fetch('https://reqres.in/api/users/1')];
debugger

fetch('https://reqres.in/api/users')
    .then(function(response) {
        debugger
        return response.json()
    })
    .then(function(json) {
        debugger
      console.log(json);
        return fetch(`https://reqres.in/api/usersDescr/en`)
    })
    .then(function(response) {
        debugger
        return response.json()
    })
    .then(function (res) {
        debugger
        console.log('user details ')
        console.log(res)
    })


Promise.all(myPromise)
    .then(function(res) {
        console.log('response done')

        Promise.all(res.map( function(r) {
            return r.json()
        }))
        .then(function(res) {
            debugger
            console.log(res)
        })
    })
    .catch(function(e) {
        console.log('response done')
    })
    .finally(function() {
        console.log('response done')

    })