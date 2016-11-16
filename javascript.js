/**
 * Brendan Jackson
 * */

/* Model Data binding*/
var nameData = {
    name:'Brendan'
}

/* vue instance/model, links model & view together */
var testData = new Vue({
    el:'#test',
    data:nameData
})


// this is our Model
var exampleData = {
    name: 'Vue.js'
}

// create a Vue instance, or, a "ViewModel"
// which links the View and the Model
var exampleVM = new Vue({
    el: '#example-1',
    data: exampleData
})