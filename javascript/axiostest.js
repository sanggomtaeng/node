const axios = require("axios");
const url = 'https://jsonplaceholder.typicode.com/todos';

function todoGet() {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res.data))
    .catch()
    .finally();
}

function todoPost() {
    const param = { userId: 1, title: 'react study', completed: false };
    axios.post(url, param).then(res => console.log(res.data))
}

function todoPut() {
    const param = { title: 'study react' };
    axios.put(url + "/1", param).then(res => console.log(res.data))
}

function todoDelete() {
    axios.delete(url + "/1").then(res => console.log(res.data))
}
