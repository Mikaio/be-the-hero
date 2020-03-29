const connection = require('../database/connection');
const crypto = require('crypto'); // Crypto will be used to generate ONG's ID

module.exports = {
    // This controller will exports an object with some methods

    // Showing all the ONGs
    async index (request, response) {
        const ongs = await connection('ongs').select('*');

        response.json(ongs);
    },

    // Creatings ONGs
    async create (request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // The ID wil be a string of letters

        // With "await" node will wait until this function is done
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        console.log("ONG's ID:", id);
        
        return response.json({id});
    }  
};