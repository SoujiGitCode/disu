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
                <div className="main-banner saas-home">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row h-100 justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <LottieContainer  name={"shipping"}/>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content pl-4">
                                            <h1>Welcome to DJP Distribution</h1>
                                            <p>  Our mission is to help small to mid-size businesses succeed by providing innovative solutions that meet the needs of their customers.</p>
                                            <Link href="#about">
                                                <a className="btn btn-primary">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="bg-gray shape-1"></div>
                    <div className="shape1">
                        <img src='/images/shape1.png' alt="img" />
                    </div>
                    <div className="shape2">
                        <img src='/images/shape2.png' alt="img" />
                    </div>
                    <div className="shape3">
                        <img src='/images/shape3.png' alt="img" />
                    </div>
                    <div className="shape4 rotateme">
                        <img src='/images/shape4.png' alt="img" />
                    </div>
                </div>

                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default Banner;
