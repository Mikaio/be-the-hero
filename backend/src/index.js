const express = require('express'); // Importing express features (Routs Module)

const cors = require('cors'); // Importing cours features (Security Module)

const routes = require('./routes'); 
const l_routes = require('./learning_routes');
// We use './' for recognize the destination as a file than an package

const app = express(); // Creating the application with express's routes and it's features

app.use(cors()); // Allowing all front-end applications to access this back-end 
app.use(express.json());
/**
 * Isso é usado para quando o parametro recebido for um objeto json, e com isso o express vai 
 * converter o JSON em algo compreendido pela aplicação
 */
app.use(routes); // The application will work as if routes.js code was here
app.use(l_routes);


app.listen(3333); // Allowing the Node application to run when we access localhost:3333
