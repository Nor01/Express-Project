var express = require('express');
var path = require('path');
var router = express.Router(); //es para crear una miniaplicacion

/////MIDDLEWARES/////

// router.use(function (req, res, next) {
//   req.tiempo = Date.now();
//   console.log('Time: ', req.tiempo);
//   next();
// });
 
// router.use('/about', function (req, res, next) {
//     console.log('Time2: ', Date.now());
//     next();
//   }
// );

//METODOS DE RUTA

// define the home page route
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'public','canciones.html'));
});

router.post('/', function(req, res) {
  res.send('Respuesta a POST');
});

router.put('/', function(req, res){
  res.send('Respuesta a PUT');
});

router.delete('/', function(req,res){
  res.send('Respuesta a DELETE');
});

module.exports = router;
