const express = require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 3000;

// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as pug
app.engine('html', require('pug').renderFile);
app.set('view engine', 'html');

app.get("/", (req, res) =>
{
    // res.send("Siema ziom")
    res.render("index", {
        pageTitle: "uuuuuu",
        pageBody: "joooooo"
    });
});

app.get("/kontakt", (req, res) =>
{
    res.send("nanananfghfhdfgdfg")
});

app.listen(port);
