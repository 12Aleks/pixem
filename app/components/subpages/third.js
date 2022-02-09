import React, {useEffect, useState} from 'react';
import {Container, Row, Col, FormControl, InputGroup, Table} from 'react-bootstrap';
import {ArrowLeftRight} from "react-bootstrap-icons";

const Third = () => {
    const [percent, setPercent] = useState(100);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [position, setPosition] = useState(false);

    useEffect(() => {
        toggleSwitch? setPercent(px * 6.25): setPx(percent / 6.25)
    }, [px, percent]);

    const inputFun = () => setToggleSwitch(!toggleSwitch);
    return (
        <Container>
            <Row>
                <Col md={3}>
                    1
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={12} className='order-0'>
                    <div className={`input-wrapper ${position && "flex-row-reverse"}`}>
                        <div>
                            <p>Px</p>
                            <InputGroup className="mb-3" size="lg">
                                <FormControl
                                    type="text"
                                    value={px}
                                    onChange={(e) => setPx(e.target.value)}
                                    onClick={inputFun}/>
                                <InputGroup.Text>px</InputGroup.Text>
                            </InputGroup>
                        </div>


                        <div onClick={() => setPosition(!position)}>
                            <ArrowLeftRight  size={20}/>
                        </div>

                        <div>
                            <p>Percent</p>
                            <InputGroup className="mb-3" size="lg">
                                <FormControl type="text"
                                             value={percent}
                                             onChange={(e) => setPercent(e.target.value)}
                                             onClick={inputFun} />
                                <InputGroup.Text >%</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                        </Col>
                        <Col md={6} className={`text-wrapper ${position && 'order-1'}`}>
                            <p><b>Pixel</b> unit (px). Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of a screen’s resolution).</p>
                        </Col>
                        <Col md={6} className={`text-wrapper ${!position && 'order-1'}`}>
                            <p><b>Percent</b> unit (%)</p>
                        </Col>
                        <Col md={12} className='order-2'>

                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    2
                </Col>
            </Row>
        </Container>
    );
};

export default Third;