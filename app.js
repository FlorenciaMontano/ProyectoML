const express = require ('express');
const path = require('path');

const app = express ();

const publicPath = path.resolve('public') ;
app.use(express.static(publicPath));

// app.listen(3000,() => {
//     console.log('Servidor corriendo en el puerto 3000');
// });

// Levantar nuestro servidor
const port = process.env.PORT || 3000;

app.listen(port,() => { 
    console.log(`Servidor funcionando${port}`)});

app.get("/",(req,res)=> {
    res.sendFile(path.resolve("views/home.html"));
})