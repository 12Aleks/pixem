import React, {useEffect, useState} from 'react';
import {Container, Row, Col, InputGroup, FormControl, Table} from 'react-bootstrap';
import {ArrowLeftRight} from "react-bootstrap-icons";
import UniversalTable from "../universalTable";
import Preview from "../preview";

const Fourth = () => {
    const [pt, setPt] = useState(12);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [position, setPosition] = useState(false);
    const tableFirst = [
        { px : 1, unit: 0.75},
        { px : 2, unit: 1.5},
        { px : 4, unit: 3},
        { px : 8, unit: 6},
        { px : 10, unit: 7.5},
        { px : 12, unit: 9},
        { px : 14, unit: 10.5}
    ];
    const tableSecond = [
        {  px: 16, unit: 12},
        {  px: 18, unit:13.5},
        {  px: 20, unit:15},
        {  px: 24, unit:18},
        {  px: 32, unit:24},
        {  px: 64, unit:48},
        {  px: 72, unit:54}
    ];
    useEffect(() => {

        toggleSwitch? setPt(px * (72 / 96) ): setPx( Math.ceil( pt * 1.3281472327365) )
    }, [px, pt]);

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
                                    <h4>Pt</h4>
                                    <InputGroup size="lg">
                                        <FormControl type="text"
                                                     value={pt}
                                                     onChange={(e) => setPt(e.target.value)}
                                                     onClick={inputFun} />
                                        <InputGroup.Text >pt</InputGroup.Text>
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className={`text-wrapper ${position && 'order-1'}`}>
                            <p><b>Pixel (px)</b>: Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of your screen’s resolution). One problem with the pixel unit is that it does not scale upward for visually-impaired readers or downward to fit mobile devices.</p>
                        </Col>
                        <Col md={6} className={`text-wrapper ${!position && 'order-1'}`}>
                            <p><b>Points (pt)</b>: Points are traditionally used in print media (anything that is to be printed on paper, etc.). One point is equal to 1/72 of an inch. Points are much like pixels, in that they are fixed-size units and cannot scale in size.</p>
                        </Col>
                        <Col md={12} className='order-2 d-flex align-items-center'>
                           <UniversalTable unitName={'pt'} data={tableFirst}/>
                           <UniversalTable unitName={'pt'} data={tableSecond}/>
                        </Col>
                    </Row>
                </Col>
                <Preview px={px} unit={pt} unitName={'pt'}/>
            </Row>
        </Container>
    );
};

export default Fourth;