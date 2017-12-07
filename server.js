var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()


app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
var todos= [
    {
            "ProfileName" : "JSB",
            "FirstName":"Siva",
            "LastName":"Baskar",
            "Age":22,
            "Language":"Tamil"
        },
        {
            "ProfileName" : "Shankar",
            "FirstName":"Shankar",
            "LastName":"Narayanan",
            "Age":22,
            "Language":"Japanese"
        },
        {
            "ProfileName" : "Dhawal",
            "FirstName":"Gehlot",
            "LastName":"R",
            "Age":22,
            "Language":"Hindi"
        }
]
        
app.get('/todo', function (req, res) {
  res.json(todos);
})

app.post('/todo' , function (req, res) {
    var todo = req.body
    console.log(todo)
    todos.push(todo)
    res.json(todos);
  })

app.delete('/todo',function(req, res){
  var todo = req.body
  console.log("delete", todo)
  todos.splice(todo.data,1)
  res.json(todos);
})
 
app.listen(4000)