import React from 'react';
import Form from './Form';

const Contact = () =>(
    <React.Fragment>
        <div id="contact" className="container pt-4">
            <h2 style={{color:"yellow"}}>Nous Contacter ?</h2>
            <p className="lead">
                Laissez vos messages, vos suggestions et toutes vos remarques directement dans
                notre messagerie, nous les recevront avec plaisir.<br/>
                Egalement pour toutes vos commandes et réservation nous les recevront ici et
                une réponse vous sera directement envoyement dans votre boite email et
                sur le numéro que vous auriez indiqué.<br/>
            </p>
            <Form/>
        </div>
    </React.Fragment>
);

export default Contact;