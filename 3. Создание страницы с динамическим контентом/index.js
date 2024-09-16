const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "pug");

app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: true }));

let todos = [
    { id: 1, text: "Написать лабу", completed: true },
    { id: 2, text: "Написать курсовую", completed: false },
    { id: 3, text: "Написать диплом", completed: false }
];

app.get("/", (req, res) => {
    res.render("index", {
        title: "Главная"
    });
});

app.get("/todos", (req, res) => {
    res.render("todos", {
        title: "Список задач",
        todos: todos
    });
});

app.post("/todos/add", (req, res) => {
    const newTaskText = req.body.task;
    if (newTaskText) {
        const newTask = {
            id: todos.length + 1,
            text: newTaskText,
            completed: false
        };
        todos.push(newTask);
    }
    res.redirect("/todos");
});

app.post("/todos/complete", (req, res) => {
    const taskId = parseInt(req.body.id);
    const task = todos.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
    }
    res.redirect("/todos");
});

app.post("/todos/delete", (req, res) => {
    const taskId = parseInt(req.body.id);
    todos = todos.filter(t => t.id !== taskId);
    res.redirect("/todos");
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
