import React from 'react';
import Link from 'next/link';
import LottieContainer from "../Lottie/LottieContainer";

class Overview extends React.Component {
    render() {
        return (
            <section className="overview-section ptb-100" id="beneficios">
                <div className="container">
                    <div className="section-title">
                        <h2>Beneficios</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img p-5">
                                <LottieContainer name={"saving"}/>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-money"></i>
                                </div>
                                <h3>Hasta 20% de descuento en toda la factura. ¿ Increible, no?</h3>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box ">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-location-pin"></i>
                                </div>
                                <h3>Gracias a la geolocalización vas a poder descubrir nuevos lugares. Eso si, ponte tus
                                    zapatos</h3>
                            </div>

                            <div className="col-lg-6 col-md-6 app-fetured-item">
                                <img src='/images/disu/caracas.png' alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img d-flex justify-content-center">
                                <div className={"w-50"}>
                                    <LottieContainer  name={"error"}/>
                                </div>

                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-close-circled"></i>
                                </div>
                                <h3>No más cupones, no más pagos anticipados. El descuento cuando lo necesites, siempre.
                                </h3>

                            </div>
                        </div>
                    </div>


                    <div className="overview-box modern-flexible d-none">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-item right-icon">
                                    <div className="icon">
                                        <i className="icofont-lamp-light"></i>
                                    </div>
                                    <h3>Stunning Showcases</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>

                                <div className="single-item right-icon">
                                    <div className="icon">
                                        <i className="icofont-responsive"></i>
                                    </div>
                                    <h3>Fully Customizable</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>

                                <div className="single-item right-icon">
                                    <div className="icon">
                                        <i className="icofont-ui-timer"></i>
                                    </div>
                                    <h3>Engaging Tours</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12 overview-img">
                                <img src='/images/disu/disu-app-views.png' alt="image" />
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-item">
                                    <div className="icon">
                                        <i className="icofont-ui-timer"></i>
                                    </div>
                                    <h3>Engaging Tours</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>

                                <div className="single-item">
                                    <div className="icon">
                                        <i className="icofont-star-alt-2"></i>
                                    </div>
                                    <h3>Exquisite Design</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>

                                <div className="single-item">
                                    <div className="icon">
                                        <i className="icofont-ui-timer"></i>
                                    </div>
                                    <h3>Engaging Tours</h3>
                                    <p>Nam fermentum, arcu nec porta aliquam, lacus lorem efficitur lectus, quis sagittis tellus erat quis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape7"><img src='/images/shape7.png' alt="shape" /></div>
                <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                <div className="shape10"><img src='/images/shape10.svg' alt="shape" /></div>
                <div className="shape11 rotateme"><img src='/images/shape11.svg' alt="shape" /></div>
            </section>
        );
    }
}

export default Overview;
