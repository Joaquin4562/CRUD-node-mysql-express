const express = require ('express');
const app = express();

// settings
const PORT = process.env.PORT || 3050;

// middlewares
app.use(express.json());

// routes
app.use( require ('./src/routes/customers') );

app.listen( PORT, () => console.log('Server runnign in port: ',PORT));
