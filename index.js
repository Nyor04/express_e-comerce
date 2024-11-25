const Express = require('express');
const APP = Express();
const PORT = 3000;

APP.get('/',(req,res)=>{
  res.send('Hola, desde mi mas basico express server');

});
APP.get('/productos',(req,res)=>{
  res.json({
    "id":"01",
    "name":"jabon",
    "precio":15
  });

});


APP.listen(PORT, ()=>{
  console.log(`webserver running on: http://localhost:${PORT}`);
});
