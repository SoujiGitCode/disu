import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <section className="subscribe-area ptb-100 pb0" id="suscribirse">
                <div className="container">
                    <div className="section-title">
                        <h2>No te lo vayas a perder. Únete a la lista de espera hoy</h2>
                        <div className="bar"></div>
                        <p>Es tiempo para que ahorres en tus compras. Estamos aqui para ti.</p>
                    </div>

                    <form className="newsletter-form">
                        <input type="email" className="form-control" placeholder="Déjanos tu e-mail" name="EMAIL" required={true} />
                        <button className="btn btn-primary" type="submit">Lista de espera</button>
                    </form>

                    <div className="section-title">
                        <p className="suscribe-section">
                            Registrate en la lista de espera, tenemos más sorpresa para ti 💖.
                        </p>
                    </div>

                </div>
            </section>
        );
    }
}

export default Subscribe;
