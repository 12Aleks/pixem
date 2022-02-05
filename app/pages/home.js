import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-2">
                            <Tab eventKey="first" title="Px to Rem">
                                1
                            </Tab>
                            <Tab eventKey="second" title="Px to Em">
                               2
                            </Tab>
                            <Tab eventKey="third" title="Px to percentage" >
                               3
                            </Tab>
                            <Tab eventKey="fourth" title="Rem to Em" >
                                4
                            </Tab>
                            <Tab eventKey="fifth" title="Rem to percentage" >
                                5
                            </Tab>
                            <Tab eventKey="sixth" title="Em to percentage" >
                                6
                            </Tab>
                        </Tabs>
                 </div>
            <Footer/>
        </>
    );
};

export default Home;