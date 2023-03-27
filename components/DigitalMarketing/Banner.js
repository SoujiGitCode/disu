import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import LottieContainer from "../Lottie/LottieContainer";
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Banner extends React.Component {

    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };

    componentDidMount(){ 
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <>
                <div className="main-banner marketing-home orange-section">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content">
                                            <h1 className="banner-h1">Hacemos tus compras más accesibles</h1>
                                            <p className="d-inline-flex text-white">Descubre y conoce los comercios
                                                cercanos a ti. En cada compra obtienes un descuento inmediato.
                                                <div className={"fav-container d-flex"}>
                                                    <LottieContainer name={"fav"}/>
                                                </div>


                                            </p>
                                            <Link href="#"><a className="text-white"><i className="icofont-play-alt-3 text-white"></i> Lanzamiento en Junio. Únete a la lista de espera</a>
                                            </Link>
                                            <br/><br/>

                                            <form action="#">
                                                <input type="email" placeholder="Déjanos tu e-mail " className="form-control" />
                                                <button type="submit" className="btn btn-primary ">Lista de espera</button>
                                            </form>
                                            <br/>
                                            <p className="d-inline-flex text-white">
                                                Hasta 20% de descuento en tus compras
                                            </p>

                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                                        <div className="app-img">
                                            <img
                                                src='/images/disu/banner-1-t.png'
                                                className="wow fadeInUp"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray shape-1"></div>
                    <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                    <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                    <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                    <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                    <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                    <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>

                    <div className="bubble-animate">
                        <div className="circle small square1"></div>
                        <div className="circle small square2"></div>
                        <div className="circle small square3"></div>
                        <div className="circle small square4"></div>
                        <div className="circle small square5"></div>
                        <div className="circle medium square1"></div>
                        <div className="circle medium square2"></div>
                        <div className="circle medium square3"></div>
                        <div className="circle medium square4"></div>
                        <div className="circle medium square5"></div>
                        <div className="circle large square1"></div>
                        <div className="circle large square2"></div>
                        <div className="circle large square3"></div>
                        <div className="circle large square4"></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Banner;
