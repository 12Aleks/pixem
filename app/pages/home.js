import {Tabs, Tab} from 'react-bootstrap';
import First from "../components/subpages/first";
import Second from "../components/subpages/second";
import Third from "../components/subpages/third";
import Fourth from "../components/subpages/fourth";
import Fifth from "../components/subpages/fifth";

const Home = () => {
    return (
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
        </div>
    );
};

export default Home;