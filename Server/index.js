const express = require ('express'); // 'express' looking at imported modules
const bodyParser = require ('body-parser'); //body parser - reformat API request formats to be readable in JSON format
const controller = require ('./controller') //looking at our own files
const massive = require('massive');
require('dotenv').config()



const app = express(); // invoking require express stored to a variable called app
app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING).then( dbInstance =>{
    app.set('db', dbInstance)
}).catch( err => console.log(err));

// app.post( '/api/createProducts', (req, res));
//     const {name, price, product_url} = req.body
//     req.app 
//         .get('db')
//         .createUser([name, price, product_url])
//         .then(() => {
//                 res.status(200).json('User Added!')
//         })
app.get('/api/inventory', (req, res) => {
    req.app 
        .get('db')
        .getInvetory()
        .then((users) => {
            res.status(200).send("It worked")
        })
})

// app.get( '/api/products/:id', products_controller.getOne);
    
// app.put( '/api/products/:id', products_controller.update);
// app.delete( '/api/products/:id', products_controller.delete);

const PORT = process.env.PORT
app.listen (3000,() => {
    console.log('HAPPYDAY3000')
})


