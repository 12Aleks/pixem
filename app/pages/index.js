import MainContainer from "../components/MainContainer";
import {Tabs, Tab, Container, Row, Col} from 'react-bootstrap';
import First from "../components/subpages/First";
import Second from "../components/subpages/Second";
import Third from "../components/subpages/Third";
import Fourth from "../components/subpages/Fourth";
import Fifth from "../components/subpages/Fifth";

const Index = () => {

    return (
        <MainContainer title={'Home page'} keywords={'Home page'}>
            <div className='main'>
                <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-2">
                    <Tab eventKey="first" title="Px to Rem">
                        <First/>
                    </Tab>
                    <Tab eventKey="second" title="Px to Em">
                        <Second/>
                    </Tab>
                    <Tab eventKey="third" title="Px to Percent">
                        <Third/>
                    </Tab>
                    <Tab eventKey="fourth" title="Px to Pt">
                        <Fourth/>
                    </Tab>
                    <Tab eventKey="fifth" title="Px to Centimeter">
                        <Fifth/>
                    </Tab>
                </Tabs>
                <Container className='app_description'>
                    <Row>
                        <Col sm={{span: 12, offset: 0}} md={{span: 10, offset: 1}} lg={{span: 10, offset: 1}}>
                            <h4>Application usage</h4>
                            <ol>
                                <li>In order to use the application which convert pixels to other units of measurement, just
                                    enter the desired number in the text window with the heading Px;</li>
                                <li>You can also click on any number in the table, and it will be automatically applied;</li>
                                <li>Unit sizes changes automatically
                                    displayed in the column with the heading PREVIEW;</li>
                                <li>The text window displays text that can be changed, below the text window
                                    there are several selectors with which you can select and apply yours styles;</li>
                                <li>In order to see the CSS code with the added styles, press the SHOW CODE button in the text
                                    window next to the text.</li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </div>
        </MainContainer>
    );
};

export default Index;