var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), function(req, res){
	return res.json(req.file);
});




app.listen(3000, function(){
	console.log("Server is listening...!");
});
