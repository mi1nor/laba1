const express = require("express");
const app = express();


app.set("view engine", "pug");

app.use(express.static('static'));


app.get("/", (req, res) => {
    res.render("index", {
        title: "Основная страница"
    });
});

app.use("/faq", function (request, response) {
    response.render("faq", {
        title: "Страница обо мне",
        name: "Иван",
        age: "19",
        rod_zanyatiy: "Учёба",
        hobby: "Нету"
    });
});


app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});