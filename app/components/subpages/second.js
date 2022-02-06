import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';
import {ArrowLeftRight} from "react-bootstrap-icons";

const Second = () => {
    const [em, setEm] = useState(1);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [position, setPosition] = useState(false);

    useEffect(() => {
        toggleSwitch? setEm(px / 16): setPx(em * 16)
    }, [px, em]);

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
                            <p>Em</p>
                            <InputGroup className="mb-3" size="lg">
                                <FormControl type="text"
                                             value={em}
                                             onChange={(e) => setEm(e.target.value)}
                                             onClick={inputFun} />
                                <InputGroup.Text >em</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                        </Col>
                        <Col md={6} className={`text-wrapper ${position && 'order-1'}`}>
                            <p><b>Pixel</b> unit (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens, 1px implies multiple device pixels.</p>
                        </Col>
                        <Col md={6} className={`text-wrapper ${!position && 'order-1'}`}>
                            <p>The <b>Em</b> unit allows setting the font size of an element relative to the font size of its parent. When the size of the parent element changes, the size of the child changes automatically.</p>
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

export default Second;