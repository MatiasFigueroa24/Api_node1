//requerimos a framework express
const express = require('express')

//llamamos a los metodos
const app = express()

app.listen('4000', () =>{
    console.log('conexion con el puerto 4000')
})
//meetodo http-> se le asigna una ruta y funcion flecha 
app.get('/', (req,res)=>{
    res.send('Mensaje de prueba con el metodo GET ')
})
app.get('/api-version', (req,res)=>{
    res.send({
        author:"Matias Figueroa",
        version:"1.0",
        tech:"Framework express"
    })
    
})

app.post('/hola', function (req, res) {
  res.send('[POST]Saludos desde express');
}); 