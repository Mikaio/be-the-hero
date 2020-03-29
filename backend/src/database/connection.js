// This file will be used to create the connection with the database in the Controllers

const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development)  // Setting development configuration

module.exports = connection
