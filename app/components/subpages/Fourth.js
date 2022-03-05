import React, {useEffect, useState} from 'react';
import {Container, Row} from 'react-bootstrap';
import Preview from "../Preview";
import FontSize from "../FontSize";

const Fourth = () => {
    const [pt, setPt] = useState(12);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [active, setActive] = useState(true);
    const unitsInfo = {
        unitData: {
            name: 'Pt',
            code: 'pt',
            description: "(pt): Points are traditionally used in print media (anything that is to be printed on paper, etc.). One point is equal to 1/72 of an inch. Points are much like pixels, in that they are fixed-size units and cannot scale in size."
        },
        first: [
            { px : 1, unit: 0.75},
            { px : 2, unit: 1.5},
            { px : 4, unit: 3},
            { px : 8, unit: 6},
            { px : 10, unit: 7.5},
            { px : 12, unit: 9},
            { px : 14, unit: 10.5}
        ],
        second: [
            {  px: 16, unit: 12},
            {  px: 18, unit:13.5},
            {  px: 20, unit:15},
            {  px: 24, unit:18},
            {  px: 32, unit:24},
            {  px: 64, unit:48},
            {  px: 72, unit:54}
        ]
    };


    useEffect(() => {
        toggleSwitch? setPt(px * (72 / 96) ): setPx( Math.ceil( pt * 1.3281472327365) )
    }, [px, pt]);


    return (
        <Container>
            <Row>
                <FontSize
                    px={px}
                    unit={pt}
                    unitsInfo={unitsInfo}
                    active={active}
                    toggleSwitch={toggleSwitch}
                    setPx={data => setPx(data)}
                    setUnit={data => setPt(data)}
                    setActive={data => setActive(data)}
                    setToggleSwitch={data => setToggleSwitch(data)}
                />
                <Preview
                    px={px >= 72? 72: px}
                    unit={active ? px >= 72? 72 : px : pt >= 54? 54: pt}
                    unitName={active ? 'px' : unitsInfo.unitData.code}
                    setPx={(data) => [setToggleSwitch(true), setPx(data)]}/>
            </Row>
        </Container>
    );
};

export default Fourth;