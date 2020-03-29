const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        // Seaching for page query param, and if it doesn't exist it's going to set as page 1

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') 
            // It's gonna return the ONG's data that is equal to the incident's ONG

            .limit(5).offset((page - 1) * 5)
            // When the list case is requested it will be limited for 5 in each page with the "limit()"
            // function, and with "offset()" function it will select the current 5 cases of the limitation.
            
            .select(['incidents.*',
             'ongs.name',
             'ongs.email',
             'ongs.city',
             'ongs.uf']);
            

        response.header('X-Total-Count', count['count(*)']); 
        // Setting the amount of cases to X-Total-Count Header

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        
        // const id = result[0];

        return response.json({ id });
    },

    async delete(request, response) {
        const {id} = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents').where('id', id).select('ong_id').first();

        if (incident.ong_id != ong_id){
            return response.status(402).json({error: 'Operation not permited.'}); // HTTP - Unauthorized error
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send()
    }
};