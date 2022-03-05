import React, {useEffect, useState} from 'react';
import {Container, Row} from 'react-bootstrap';
import FontSize from "../fontSize";
import Preview from "../preview";

const Fifth = () => {

    const [cm, setCm] = useState(0.4233333333333334);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [active, setActive] = useState(true);
    const unitsInfo = {
        unitData: {
            name: 'Centimeter',
            code: 'cm',
            description: "(rem): The 'rem' unit is based upon the font-size value of the root element, which is the element. And if the element doesn’t have a specified font-size, the browser default value of 16px is used. So here only the value of the root is considered, and there is no relation with a parent element."
        },
        first: [
            {px: 1, unit: 0.026458},
            {px: 2, unit: 0.052916},
            {px: 4, unit: 0.105833},
            {px: 8, unit: 0.211666},
            {px: 10, unit: 0.264583},
            {px: 12, unit: 0.3175},
            {px: 14, unit: 0.370416}
        ],
        second: [
            {px: 16, unit: 0.423333},
            {px: 18, unit: 0.370416},
            {px: 20, unit: 0.529166},
            {px: 24, unit: 0.635},
            {px: 32, unit: 0.846666},
            {px: 64, unit: 1.693333},
            {px: 72, unit: 1.905000}
        ]
    };

    useEffect(() => {
        toggleSwitch ? setCm (px / (96 / 2.54)) : setPx(cm * (96 / 2.54)  )
    }, [px, cm]);

    return (
        <Container>
            <Row>
                <FontSize
                    px={px}
                    unit={cm}
                    unitsInfo={unitsInfo}
                    active={active}
                    toggleSwitch={toggleSwitch}
                    setPx={data => setPx(data)}
                    setUnit={data => setCm(data)}
                    setActive={data => setActive(data)}
                    setToggleSwitch={data => setToggleSwitch(data)}
                />
                <Preview
                    //max font-size in preview
                    px={px >= 72? 72: px}
                    unit={active ? px >= 72? 72 : px : cm >= 4.5? 4.5: cm}
                    unitName={active ? 'px' : unitsInfo.unitData.code}
                    setPx={(data) => [setToggleSwitch(true), setPx(data)]}/>
            </Row>
        </Container>
    );
};

export default Fifth;