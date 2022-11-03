// definicion de configuracion de un server HTTP con Node.
const express = require('express')

require('dotenv').config();
const fs = require('fs');
const http = require("http");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Definicion de rutas.
app.get('/', (_req, res) => {
    //    res.status(200).send({
        res.status(200).json({
            health: 'Up',
            success: true
        })
    })

app.get('/api/productos', (_req, res) => {

    const productos = fs.readFileSync('productos.txt', 'utf-8');
    const parsedProductos = JSON.parse(productos);
    console.log(parsedProductos);
    res.json(parsedProductos)
    
})


app.get('/api/productos/:id', (req, res) => {
    const productos = fs.readFileSync('productos.txt', 'utf-8');
    const parsedProductos = JSON.parse(productos);
    const position = req.params.id

    parsedProductos.forEach(i => {
        if(i.id == position){
        console.log(`${i.name}, ${i.price}, ${i.thrumbail}`)
        res.send(`El Id ingresado en la posicion: ${position} es ${i.name}`)
        }
            
    })
    

})

app.post('/api/productos', (req, res) => {
    const position = req.params.id
    res.send(`El Id ingresado es ${position}`)

})

app.delete('/api/productos/:id', (req, res) => {
    const idPosition = req.params.id
    res.send(`El Id a borrar es ${idPosition}`)

})

const PORT = process.env.PORT || 3002

app.listen(PORT, () => console.info(`server UP and running on port ${PORT}`))