// definicion de configuracion de un server HTTP con Node.
const app = require('./app');
const fs = require('fs');
const http = require("http");



// Definicion de rutas.
app.get('/', (_req, res) => {
    //    res.status(200).send({
        res.status(200).json({
            health: 'Up',
            success: true
        })
    })

app.get('/productos', (_req, res) => {

    const productos = fs.readFileSync('productos.txt', 'utf-8');
    const parsedProductos = JSON.parse(productos);
    console.log(parsedProductos);
    res.json(parsedProductos)
    
})


const PORT = process.env.PORT || 3002

app.listen(PORT, () => console.info(`server UP and running on port ${PORT}`));
