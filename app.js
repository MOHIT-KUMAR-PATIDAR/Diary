//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const date = require(__dirname + "/date.js");



const app = express();
let items =["BuyFood","CookFood","EatFood"];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){

 let day = date.getDate();



res.render("list", {ListTitle: day, NewListItems: items});

});

app.post("/", function(req, res){
    let item =req.body.NewItem;
if(req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work");

} else {
  items.push(item);
res.redirect("/");

}



});
app.get("/work",function(req,res){
res.render("list", {ListTitle: "Work List" ,NewListItems: workItems});
});
app.get("/about", function(req,res){
  res.render("about")
})

app.post("/work", function(req, res){
    let item =req.body.NewItem;
    workItems.push(item);
res.redirect("/work ");
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
