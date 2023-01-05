const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let Lists = ['cook Food', 'Eat Food', 'Buy Food'];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {

    let day = date.getdate();
    res.render("list", { ListTitle: day, newListItem: Lists });

});
app.get("/work", function (req, res) {
    res.render("list", { ListTitle: "Work List", newListItem: workItems });
});
app.get("/about", function (req, res) {
    res.render("about");
})

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});
app.post("/", function (req, res) {
    let List = req.body.newItem;
    if (req.body.list === "work") {
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        item.push(item);
        res.redirect("/");
    }

    Lists.push(List);
    res.redirect("/");
});



app.listen(3000, function () {
    console.log("server connected ...");
});