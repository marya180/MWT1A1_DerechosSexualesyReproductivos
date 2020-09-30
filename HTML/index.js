

var express = require('express');
var app = express();
app.use(express.static(__dirname)); 
app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
})