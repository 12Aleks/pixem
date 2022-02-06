import React, {useState, useEffect, useRef} from 'react';
import {Container, Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';
import {ArrowLeftRight} from "react-bootstrap-icons";

const First = () => {
    const [rem, setRem] = useState(1);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [position, setPosition] = useState(false);

    useEffect(() => {
      toggleSwitch? setRem(px / 16): setPx(rem * 16)
    }, [px, rem]);

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
                            <p>Rem</p>
                            <InputGroup className="mb-3" size="lg">
                                <FormControl type="text"
                                             value={rem}
                                             onChange={(e) => setRem(e.target.value)}
                                             onClick={inputFun} />
                                <InputGroup.Text >rem</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                        </Col>
                        <Col md={6} className={`text-wrapper ${position && 'order-1'}`}>
                            <p><b>Pixel</b> unit (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens, 1px implies multiple device pixels.</p>
                        </Col>
                        <Col md={6} className={`text-wrapper ${!position && 'order-1'}`}>
                            <p>The <b>Rem</b> unit is based upon the font-size value of the root element, which is the element. And if the element doesn’t have a specified font-size, the browser default value of 16px is used. So here only the value of the root is considered, and there is no relation with a parent element.</p>
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

export default First;