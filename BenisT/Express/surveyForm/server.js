var express = require("express");
var path = require("path")
var bodyParser = require("body-parser")

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//static not
// app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render("main");
})


app.post('/user', function(req, res){
  var user_data = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.lang,
    comment: req.body.comment
  }
   console.log("POST DATA \n\n", req.body)
  res.render("index", {info: user_data});
})

app.listen(8000, function(){
  console.log("listening on port 8000")
})
