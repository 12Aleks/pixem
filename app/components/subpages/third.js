import React, {useEffect, useState} from 'react';
import {Container, Row, Col, FormControl, InputGroup} from 'react-bootstrap';
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
                            <p><b>Pixel</b> unit (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens, 1px implies multiple device pixels.</p>
                        </Col>
                        <Col md={6} className={`text-wrapper ${!position && 'order-1'}`}>
                            <p></p>
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