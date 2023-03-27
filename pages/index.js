import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/DigitalMarketing/Banner';
import Features from '../components/App/Features';
import Overview from '../components/App/Overview';
import About from '../components/Saas/Overview';
import JoinCard from '../components/Saas/JoinCard';
import CtaCard from '../components/Saas/CtaCard';
import SaasTools from '../components/Saas/SaasTools';
import WorkProcess from '../components/Saas/WorkProcess';
import PricingPlan from '../components/Saas/PricingPlan';
import GetStarted from '../components/Saas/GetStarted';
import Feedback from '../components/Saas/Feedback';
import Partner from '../components/Saas/Partner';
import Contact from "./contact";
import Funfact from "../components/Saas/Funfact";
import AppWorks from "../components/App/AppWorks";
import Screenshot from "../components/App/Screenshot";
import Subscribe from "../components/App/Subscribe";
import Team from "../components/App/Team";
import Download from "../components/App/Download";

class Index extends React.Component {
    render() {
        return (
            <>

                <Navbar />
                <Banner />
                <About />
                <Features />
                <Overview />
                <Funfact />
                <Subscribe />
                <Footer />
            </>
        );
    }
}

export default Index;
