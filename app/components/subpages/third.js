import React, {useEffect, useState} from 'react';
import {Container, Row, Col, FormControl, InputGroup, Table} from 'react-bootstrap';
import {ArrowLeftRight} from "react-bootstrap-icons";
import UniversalTable from "../universalTable";
import Preview from "../preview";

const Third = () => {
    const [percent, setPercent] = useState(100);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [position, setPosition] = useState(false);

    const tableFirst = [
        { px : 1, unit: 6.25},
        { px : 2, unit: 12.5},
        { px : 4, unit: 25},
        { px : 8, unit: 50},
        { px : 10, unit: 62.5},
        { px : 12, unit: 75},
        { px : 14, unit: 87.5}
    ];
    const tableSecond = [
        {  px: 16, unit:100},
        {  px: 18, unit:112.5},
        {  px: 20, unit:125},
        {  px: 24, unit:150},
        {  px: 32, unit:200},
        {  px: 64, unit:400},
        {  px: 72, unit:450}
    ];

    useEffect(() => {
        toggleSwitch? setPercent(px * 6.25): setPx(percent / 6.25)
    }, [px, percent]);

    const inputFun = () => setToggleSwitch(!toggleSwitch);
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <h2>Font size</h2>
                    <Row>
                        <Col md={12} className='order-0'>
                    <div className={`input-wrapper ${position && "flex-row-reverse"}`}>
                        <div>
                            <h4>Px</h4>
                            <InputGroup size="lg">
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
                            <h4>Percent</h4>
                            <InputGroup size="lg">
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
                            <p><b>Pixel (px)</b>: Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of your screen’s resolution). One problem with the pixel unit is that it does not scale upward for visually-impaired readers or downward to fit mobile devices.</p>
                        </Col>
                        <Col md={6} className={`text-wrapper ${!position && 'order-1'}`}>
                            <p><b>Percent (%)</b>: The percent unit is much like the “em” unit, save for a few fundamental differences. First and foremost, the current font-size is equal to 100% (i.e. 16px or 12pt = 100%). While using the percent unit, your text remains fully scalable for mobile devices and for accessibility.</p>
                        </Col>
                        <Col md={12} className='order-2 d-flex align-items-center'>
                            <UniversalTable  unitName={'%'} data={tableFirst}/>
                            <UniversalTable  unitName={'%'} data={tableSecond}/>
                        </Col>
                    </Row>
                </Col>
                <Preview px={px} unit={percent} unitName={'%'}/>
            </Row>
        </Container>
    );
};

export default Third;