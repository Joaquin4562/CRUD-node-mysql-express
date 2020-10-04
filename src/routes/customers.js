const express = require('express');
const router = express.Router();
const connection = require('../config/db');


router.get('/', ( _ , response) => {
    response.send('GET');
});

// all customers
router.get('/customers', ( _ , response) => {
    const sql = 'SELECT * FROM customers';
    connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            response.json(result);
        } else {
            response.send('No result');
        }
    });
});
// all customers by id
router.get('/customers/:id', (request, response) => {
    const { id } = request.params;
    const sql = `SELECT * FROM customers WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            response.json(result);
        } else {
            response.send('No result');
        }
    })
});

// new customers
router.post('/new/customers', (request, response) => {
    const sql = 'INSERT INTO customers SET ?';
    const customer = {
        name:   request.body.name,
        email:  request.body.email,
        number: request.body.number
    };
    connection.query(sql, customer, (error, _ ) => {
        if (error) throw error;
        response.send('Customer inserted');
    })
});

// update customer
router.put('/update/customers/:id', (request, response) => {
    const { id } = request.params;
    const { name, email, number } = request.body;
    const sql = `UPDATE customers
                    SET name = '${name}', email = '${email}', number = '${number}'
                    WHERE id = ${id}`;
    connection.query(sql, customer, (error, _ ) => {
        if (error) throw error;
        response.send('customer updated.')
    });
});

// delete costumers
router.delete('/delete/customers/:id', (request, response) => {
    const  { id } = request.params;
    const sql = `DELETE FROM customers WHERE id = ${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        response.send('customer deleted');
    });
});

module.exports =  router;