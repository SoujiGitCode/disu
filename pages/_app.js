import '../styles/bootstrap.min.css';
import '../styles/icofont.min.css';
import '../styles/animate.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'react-image-lightbox/style.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/custom.css'

import { Provider } from 'react-redux';
import { Preloader, Placeholder } from 'react-preloading-screen';
import App from 'next/app';
import Head from "next/head";
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/reducers/cartReducer';

import GoTop from '../components/Shared/GoTop';
import Loader from '../components/Shared/Loader'; 

export default withRedux(initStore)(
    class MyApp extends App {
        render () {
            const { Component, pageProps, store } = this.props

            return (
                <>
                    <Head>
                        <title>Disu</title>
                        <link rel="icon" type="image/png" sizes="32x32" href="../public/logo-icon-png.png" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <meta name="description" content="Disu App" />
                        <meta name="og:title" property="og:title" content="Disu App"></meta>
                        <meta name="twitter:card" content="Disu App"></meta>
                        <link rel="canonical" href="https://github/soujigitcode"></link>
                    </Head>
 
                    <Preloader>
                        <Provider store={store}>
                            <Component {...pageProps} />
                        </Provider>

                        <GoTop scrollStepInPx="50" delayInMs="16.66" />

                        <Placeholder>
                            <Loader />
                        </Placeholder>
                    </Preloader>
                </>
            );
        }
    }
)