import React from 'react';
import LottieContainer from "../Lottie/LottieContainer";

class Features extends React.Component {
    render() {
        return (
            <section className="features-area saas-features ptb-100" id={"services"}>
                <div className="container">
                    <div className="section-title">
                        <h2>Services</h2>
                        <div className="bar"></div>
                        <p>At DJP, we are committed to providing our clients with the highest quality service and support.
                            Whether you're just starting out in the world of international trade or you're looking to
                            expand your existing business, we're here to help..</p>
                    </div>
                </div>

                <div className="features-inner-area">
                    <div className="container-fluid">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-image">
                                    <LottieContainer  name={"truck"}/>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="features-inner-content">
                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-farmer icon-fs"></i>
                                        </div>
                                        <h3>Sourcing</h3>
                                        <p>Specializing in Raw Materials, Construction Hardware and Industrial Equipment,
                                            we source from top-tier providers in China, Europe and North America</p>

                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-ship-alt icon-fs"></i>
                                        </div>
                                        <h3>Shipping & Logistics</h3>
                                        <p>These can be provided at guaranteed competitive rates as either add-on or
                                            independent services.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-money icon-fs"></i>
                                        </div>
                                        <h3>Trading</h3>
                                        <p>We offer global cross-trading opportunities and top products available for
                                            immediate purchase.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape7">
                    <img src='/images/shape7.png' alt="shape"/>
                </div>
                <div className="shape3">
                    <img src='/images/shape3.png' alt="img"/>
                </div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6">
                    <img src='/images/shape6.png' alt="img"/>
                </div>
                <div className="shape8 rotateme">
                    <img src='/images/shape8.svg' alt="shape"/>
                </div>
                <div className="shape9">
                    <img src='/images/shape9.svg' alt="shape"/>
                </div>
                <div className="shape10">
                    <img src='/images/shape10.svg' alt="shape"/>
                </div>
                <div className="shape11 rotateme">
                    <img src='/images/shape11.svg' alt="shape"/>
                </div>
            </section>
        );
    }
}

export default Features;
