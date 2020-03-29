import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // Using Link instead of <a>, the pge will not reload to the next
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();  // Used to navigate to other pages in functions (like the Link)

    async function handleRegister(e) {
        e.preventDefault(); // When the form submit the page will not refresh

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data); 
            // Using the axios to call the backend request for user's register
            
            alert(`Seu ID de acesso: ${response.data.id}`); // Showing the user's ID

            history.push('/'); // Will send the user to main page
        }
        catch (error) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
       <div className="register-container">
           <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero" />

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                <Link className="back-link" to="/">
                    <FiArrowLeft size={16} color="#e02041" />
                    Já tenho cadastro
                </Link>
            </section>
            <form onSubmit={handleRegister}>
                <input 
                 placeholder="Nome da ONG"
                 value={name}
                 onChange={e => setName(e.target.value)} />

                <input 
                 type="email" 
                 placeholder="E-mail"
                 value={email}
                 onChange={e => setEmail(e.target.value)} />

                <input 
                 placeholder="WhatsApp"
                 value={whatsapp}
                 onChange={e => setWhatsapp(e.target.value)} />

                <div className="input-group">
                    <input 
                     placeholder="Cidade"
                     value={city}
                     onChange={e => setCity(e.target.value)} />

                    <input 
                     placeholder="UF" 
                     style={{ width: 80 }}
                     value={uf}
                     onChange={e => setUf(e.target.value)} />
                </div>

                <button className="button" type="submit">Cadastrar</button>
            </form>
           </div>
       </div>
    );
}