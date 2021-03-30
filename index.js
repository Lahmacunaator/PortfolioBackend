const express = require('express');
const dbStuff = require("./js/dbStuff");
const cors = require('cors')
const path = require('path')
const app = express();
const router = express.Router();


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'html/index.html'));
});
app.use('/', router);

app.listen(3000, () => {
  console.log('server started');
});

//404 Error
app.use(function(req, res, next) {
    res.status(404);
    res.sendFile(__dirname + '/404.html');
});

//if they go to '/lol'
router.get('/lol', cors(), function(req, res){
  res.sendFile(path.join(__dirname, 'js/lol.json'));
});
app.use('/lol', router);


var db = dbStuff.getDb();
var testEntry = dbStuff.getDbEntry("test");