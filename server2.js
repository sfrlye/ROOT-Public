const express = require('express');
require('dotenv').config()
const app = express();
    //const frase = "Hola Mundo como estan";
app.get('/api/productos', (_req, res) => {
    res.status(200).send('productos')

}); 

app.get('/api/productos/:id', (req, res) => {
    const position = req.params.id
    res.send(`El Id ingresado es ${position}`)

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