import Header from "../components/header";
import {Container, Row} from "react-bootstrap";
import Footer from "../components/footer";

const About = () => {
    return (
        <>
            <Header/>
            <Container className='main'>
                <Row>
            <h1>About us</h1>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

export default About;