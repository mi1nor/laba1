const express = require("express");
const app = express();


app.set("view engine", "pug");

app.use(express.static('static'));


app.get("/", (req, res) => {
    const recentArticles = [
        { title: "Статья №1", url: "/articles/1" },
        { title: "Статья №2", url: "/articles/2" },
        { title: "Статья №3", url: "/articles/3" }
    ];

    res.render("index", {
        title: "Основная страница",
        recentArticles: recentArticles
    });
});

// article pages
app.get("/articles", (req, res) => {
    const articles = [
        { title: "Статья №1", url: "/articles/1" },
        { title: "Статья №2", url: "/articles/2" },
        { title: "Статья №3", url: "/articles/3" }
    ];
    
    res.render("articles", {
        title: "Статьи",
        recentArticles: articles
    });
});

// articles pages
app.get("/articles/:id", (req, res) => {
    const articleId = req.params.id;

    const article = {
        title: `Статья №${articleId}`,
        publicationDate: "06.09.2024",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit repudiandae excepturi officia ab fugiat sapiente obcaecati, ea atque ducimus perspiciatis ipsa aliquam omnis animi, molestiae dolorem? Vel ducimus ipsa voluptas et cupiditate possimus sapiente dignissimos voluptatibus perspiciatis blanditiis error debitis, non nesciunt fuga quae rem quam molestiae eius enim placeat."
    };

    const recentArticles = [
        { title: "Статья №1", url: "/articles/1" },
        { title: "Статья №2", url: "/articles/2" },
        { title: "Статья №3", url: "/articles/3" }
    ];

    res.render("article", {
        title: article.title,
        articleTitle: article.title,
        publicationDate: article.publicationDate,
        articleContent: article.content,
        recentArticles: recentArticles
    });
});

// contacts pages
app.get("/contacts", (req, res) => {
    res.render("contacts", {
        title: "Контакты"
    });
});


app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});