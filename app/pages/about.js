import {Container, Row, Col} from "react-bootstrap";
import MainContainer from "../components/MainContainer";

const About = () => {
    return (
        <MainContainer title={'About project'} keywords={'About project'}>
            <Container className='main about'>
                <Row>
                    <Col  sm={{span: 12, offset: 0}} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
                        <h1>About project</h1>
                        <p><b>Pixem</b> app is an online tool that helps you convert pixels into different relative and
                            absolute measurement units.</p>
                        <p>Converting pixels into other CSS units like em, rem or percents can be confusing
                            sometimes.</p>
                        <p>This app has been made in order to lessen the hassle of converting these values yourself, so
                            you can focus more on your art than doing the math every single time you need to. Sometimes,
                            you just need a quick pixel's converter. The visualizer and code generator added in the application can also help you.</p>
                    </Col>
                </Row>
            </Container>
        </MainContainer>
    );
};

export default About;