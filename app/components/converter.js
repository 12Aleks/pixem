import React, {useEffect, useState} from 'react';
import {Col, FormControl, InputGroup, Row} from "react-bootstrap";
import {ArrowLeftRight} from "react-bootstrap-icons";
import UniversalTable from "./universalTable";

const Converter = () => {
    const [unit , setUnit] = useState(0)
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [position, setPosition] = useState(false);
    
    useEffect(() => {
        toggleSwitch && unitName === 'rem' || 'em'? setUnit(px / 16): setPx(rem * 16)
    }, [px, unit]);

    const inputFun = () => setToggleSwitch(!toggleSwitch);
    
    return (
        <Col md={6}>
            <Row>
                <Col md={12} className='order-0'>
                    <div className={`input-wrapper ${position && "flex-row-reverse"}`}>
                        <div>
                            <h4>Px</h4>
                            <InputGroup mb-3 size="lg">
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
                            <h4>Rem</h4>
                            <InputGroup mb-3 size="lg">
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
                    <p><b>Pixel (px)</b>: Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of your screen’s resolution). One problem with the pixel unit is that it does not scale upward for visually-impaired readers or downward to fit mobile devices.</p>
                </Col>
                <Col md={6} className={`text-wrapper ${!position && 'order-1'}`}>
                    <p><b>Rems (rem)</b>: The 'rem' unit is based upon the font-size value of the root element, which is the element. And if the element doesn’t have a specified font-size, the browser default value of 16px is used. So here only the value of the root is considered, and there is no relation with a parent element.</p>
                </Col>
                <Col md={12} className='order-2 d-flex align-items-center'>
                    <UniversalTable  unitName={'rem'} data={tableFirst}/>
                    <UniversalTable  unitName={'rem'} data={tableSecond}/>
                </Col>
            </Row>
        </Col>
    );
};

export default Converter;