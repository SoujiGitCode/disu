import React from 'react';
import Link from 'next/link';

class Overview extends React.Component {
    render() {
        return (
            <section className="overview-section ptb-100 bg-gray" id={"about"}>
                <div className="container">
                    <div className="section-title">
                        <h2>Quienes Somos</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores beatae consectetur enim est eum facere fugiat, maxime mollitia nisi omnis pariatur perferendis placeat quae quidem, quo quod sed vero.
                        </p>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-5 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-ui-messaging"></i>
                                </div>
                                <h3>We provide proffesional staff</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, facere laboriosam minus
                                    quia quibusdam ratione sint veritatis voluptas? Adipisci beatae culpa deleniti
                                    dolorem nesciunt nostrum porro provident ratione sunt voluptatibus?</p>

                                <ul>
                                    <li>point 1</li>
                                    <li>point 2</li>
                                    <li>point 3</li>
                                </ul>
                                <Link href="#services">
                                    <a className="btn btn-primary">Featured Services</a>
                                </Link>
                            </div>

                            <div className="col-lg-5 col-md-6 overview-img">
                                <img src='/images/disu/savings-draw.svg' alt="image" />
                            </div>
                        </div>
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
