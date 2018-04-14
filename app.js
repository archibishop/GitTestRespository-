var express = require('express');
var app = express();

app.use(express.static('public'));

// app.get('/', function(req, res){
//     console.log("Get a get request for the homepage");
//     res.send('Hello World');
// });

app.get('/index.htm', function(req, res){
    res.sendFile(__dirname + "/" + "index.htm");

});

app.get('/process_get', function(req, res){
    //Prepare Output in JSON Format
    response = {
        First_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


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