function todoList() {
    fetch("http://localhost:3000/todo")
        .then(result => result.json())
        .then(result => {
            for(todo of result) {
                const newTag = `<li id="${todo.no}">${todo.title}<span class="close">X</span></li>`;
                myUL.insertAdjacentHTML("beforeend", newTag);
            }
        })
};
todoList();

function newElement() {
    const title = document.getElementById("myInput").value;
    fetch("http://localhost:3000/todo", {
        method : "POST",
        headers : { 'Content-Type': 'application/json'},
        body : JSON.stringify({ title : title })
    })
    .then(result => result.json())
    .then(result => {
        const newTag = `<li>`+ title +`<span class="close">X</span></li>`;
        myUL.insertAdjacentHTML("beforeend", newTag);
        document.getElementById("myInput").value = "";
    });
};

function updateTodo() {
    fetch("http://localhost:3000/todo", {
        method : "PUT",
        headers : { 'Content-Type': 'application/json'},
        body : JSON.stringify({ no : no, complet : complete })
    })
    .then(result => result.json())
    .then(result => {
        console.log(result);
    })
};

function deleteTodo() {
    fetch("http://localhost:3000/todo", {
        method : "DELETE",
        headers : { 'Content-Type': 'application/json'},
        body : JSON.stringify({ no : no })
    })
    .then(result => result.json())
    .then(result => {
        console.log(result);
        alert('삭제성공');
    })
};