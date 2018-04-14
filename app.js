var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(express.static('public'));

//Create application/x-www-formurlencoded parser

app.get('/index.htm',function(req, res){
    res.sendFile(__dirname+ '/' + "index.htm");
})

app.post('/process_post', urlencodedParser, function(req, res){
    //Prepare Output in json Format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

// app.get('/', function(req, res){
//     console.log("Get a get request for the homepage");
//     res.send('Hello World');
// });


// app.post('/', function(req, res){
//     console.log("Got a post request for the homepage");
//     res.send("Hello Post");
// });

// app.delete('/del_user', function(req,res){
//     console.log("Got a delete request for /del_user");
//     res.send("Hello delete");
// });

// app.get('/list_user',function(req, res){
//     console.log("Got a Get request for /list_user");
//     res.send("Page Listing");
// });

// app.get('/ab*cd', function(req, res){
//     console.log("Got a GET request for /ab*cd");
//     res.send('Page Pattern Match');
// });

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s",host, port)
})