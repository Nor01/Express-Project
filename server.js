var canciones = require('./canciones');
var express = require('express');
var path = require('path');
var app = express();

app.listen(3000, function () { //escucha en el puerto 3000
  console.log('Escuchando en puerto 3000!');
});

////////MIDDLEWARE GENERAL////
app.use(function (req, res, next) {
  console.log('middleware server.js');
  next();
});

// app.get('/',function (req, res) {
//   res.sendFile(path.join(__dirname,'public','index.html'));
// });

///////ROUTER//////
app.use('/canciones', canciones);

app.route('/canciones')
  .get((req, res) => {
    res.sendFile(path.join(__dirname,'public','canciones.html'));
  })
  .post((req, res) => {
    res.send('Respuesta a POST')
  })
  .put((req, res) => {
    res.send('Respuesta a PUT')
  })
  .delete((req, res) => {
    res.send('Respuesta a DELETE')
  })

////////////
app.get('/descarga', function(req, res){
  res.send('id_cancion: ' + req.query.id_cancion);
});

////////////
app.get('/acerca', function(req, res){
  res.sendFile(path.join(__dirname,'public','acerca.html'));

});
