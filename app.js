var express = require('express');
var routes = require('./routes');
var about = require('./routes/about');
var akun = require('./routes/akun');
var http = require('http');
var path = require('path');
var mysql = require('mysql');
var connection  = require('express-myconnection');
var app = express();
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(
  connection(mysql,{
    host      : 'localhost',
    user      : 'root',
    password  : '',
    port      : 3306, //port mysql
    database  :'dbkampus'
    },'pool') //or single
);

app.get('/', routes.index);
app.get('/about', about.about);
app.get('/akun', akun.data_akun);
app.get('/akun/post', akun.post);
app.post('/akun/post', akun.save);
app.get('/akun/ubah/:id', akun.get_data);
app.post('/akun/ubah/:id', akun.put);
app.get('/akun/hapus_akun/:id', akun.hapus_akun);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Kamu Menggunakan Port : ' + app.get('port'));
});
