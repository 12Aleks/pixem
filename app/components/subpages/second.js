import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form, InputGroup, FormControl} from 'react-bootstrap';
import {ArrowLeftRight} from "react-bootstrap-icons";
import UniversalTable from "../UniversalTable";

const Second = () => {
    const [em, setEm] = useState(1);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [position, setPosition] = useState(false);
    const tableFirst = [
        { px : 1, unit: 0.0625},
        { px : 2, unit: 0.125},
        { px : 4, unit: 0.25},
        { px : 8, unit: 0.5},
        { px : 10, unit: 0.625},
        { px : 12, unit: 0.75},
        { px : 14, unit: 0.875}
    ];
    const tableSecond = [
        {  px: 16, unit: 1},
        {  px: 18, unit:1.125},
        {  px: 20, unit:1.25},
        {  px: 24, unit:1.5},
        {  px: 32, unit:2},
        {  px: 64, unit:4},
        {  px: 72, unit:4.5}
    ];

    useEffect(() => {
        toggleSwitch? setEm(px / 16): setPx(em * 16)
    }, [px, em]);

    const inputFun = () => setToggleSwitch(!toggleSwitch);

    return (
        <Container>
            <Row>
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
                            <p><b>Pixel (px)</b>: Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of your screen’s resolution). One problem with the pixel unit is that it does not scale upward for visually-impaired readers or downward to fit mobile devices.</p>
                        </Col>
                        <Col md={6} className={`text-wrapper ${!position && 'order-1'}`}>
                            <p><b>Ems (em)</b>: The “em” is a scalable unit that is used in web document media. An em is equal to the current font-size, for instance, if the font-size of the document is 12pt, 1em is equal to 12pt. Ems are scalable in nature, so 2em would equal 24pt, .5em would equal 6pt, etc. Ems are becoming increasingly popular in web documents due to scalability and their mobile-device-friendly nature.</p>
                        </Col>
                        <Col md={12} className='order-2 d-flex align-items-center'>
                        <UniversalTable  unitName={'em'} data={tableFirst}/>
                        <UniversalTable  unitName={'em'} data={tableSecond}/>
                         </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    2
                </Col>
            </Row>
        </Container>
    );
};

export default Second;