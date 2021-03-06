var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var multer = require('multer');

// var urlencodedParser = bodyParser.urlencoded({ extended: false})

app.get('/FileUpload.htm',function(req, res){
    res.sendFile(__dirname+ '/' + "FileUpload.htm");
})

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false }));
app.use(multer({dest:'./temp/'}).single('singleInputFileName'));

app.post('/file_upload', function(req, res){
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    var file = __dirname + "/" + req.files.file.name;

    fs.readFile(req.Files.file.path, function(err, data){
        fs.writeFile(file, data, function(err){
            if(err){
                console.log(err);
            }else{
                response = {
                    message: 'File Uploaded Successfully',
                    filename: req.files.file.name
                };
            }
            console.log(response);
            res.end( JSON.stringify(response));
        });
    });
})



// <<<<<<< HEAD
// =======
// //Create application/x-www-formurlencoded parser

// app.get('/index.htm',function(req, res){
//     res.sendFile(__dirname+ '/' + "index.htm");
// })

// app.post('/process_post', urlencodedParser, function(req, res){
//     //Prepare Output in json Format
//     response = {
//         first_name: req.body.first_name,
//         last_name: req.body.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
// })

// >>>>>>> Helloworld
// // app.get('/', function(req, res){
// //     console.log("Get a get request for the homepage");
// //     res.send('Hello World');
// // });

// <<<<<<< HEAD
// app.get('/index.htm', function(req, res){
//     res.sendFile(__dirname + "/" + "index.htm");

// });
// =======
// >>>>>>> Helloworld

// app.get('/process_get', function(req, res){
//     //Prepare Output in JSON Format
//     response = {
//         First_name: req.query.first_name,
//         last_name: req.query.last_name
//     };
//     console.log(response);
//     res.end(JSON.stringify(response));
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