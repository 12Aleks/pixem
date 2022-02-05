import React from 'react';
import {Container, Row} from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";

const Contact = () => {
    return (
        <>
            <Header/>
            <Container className='main'>
                <Row>
                    <h1>Contact</h1>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

export default Contact;