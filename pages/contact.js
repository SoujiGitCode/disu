import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/ContactUs/Banner';
import Content from '../components/ContactUs/Content';
import Form from '../components/ContactUs/Form';
class Contact extends Component {
    render() {
        return (
            <div id={"contact"}>
                <Form />
            </div>
        );
    }
}

export default Contact;
