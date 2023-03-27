import React from 'react';
import Link from 'next/link';

class Overview extends React.Component {
    render() {
        return (
            <section className="overview-section ptb-100 bg-gray" id={"nosotros"}>
                <div className="container">
                    <div className="section-title">
                        <h2>¿Por qué Disu?</h2>
                        <div className="bar"></div>
                        <p>Queremos ayudarte a ahorrar dinero cada vez que compres. Sabemos que el dinero no alcanza y
                            cada dólar cuenta.
                        </p>
                    </div>

                    <div className="section-title">
                        <h2>¿Como lo hacemos?</h2>
                        <div className="bar"></div>
                        <p>Gracias a las alianzas que hemos formado con los mejores comercios de Caracas, vas a poder
                            difrutar de descuentos exclusivos comprando directamente en cualquier de nuestros aliados.
                        </p>
                    </div>
                </div>

                <div className="shape7">
                    <img src='/images/shape7.png' alt="shape" />
                </div>
                <div className="shape3">
                    <img src='/images/shape3.png' alt="img" />
                </div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6">
                    <img src='/images/shape6.png' alt="img" />
                </div>
                <div className="shape8 rotateme">
                    <img src='/images/shape8.svg' alt="shape" />
                </div>
                <div className="shape9">
                    <img src='/images/shape9.svg' alt="shape" />
                </div>
                <div className="shape10">
                    <img src='/images/shape10.svg' alt="shape" />
                </div>
                <div className="shape11 rotateme">
                    <img src='/images/shape11.svg' alt="shape" />
                </div>
            </section>
        );
    }
}

export default Overview;
