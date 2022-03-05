import {useEffect, useState} from 'react';
import {Container, Row} from 'react-bootstrap';
import Preview from "../Preview";
import FontSize from "../FontSize";

const Third = () => {
    const [percent, setPercent] = useState(100);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [active, setActive] = useState(true);
    const unitsInfo = {
        unitData: {
            name: 'Percent',
            code: '%',
            description: "(%): The percent unit is much like the “em” unit, save for a few fundamental differences. First and foremost, the current font-size is equal to 100% (i.e. 16px or 12pt = 100%). While using the percent unit, your text remains fully scalable for mobile devices and for accessibility."
        },
        first: [
            { px : 1, unit: 6.25},
            { px : 2, unit: 12.5},
            { px : 4, unit: 25},
            { px : 8, unit: 50},
            { px : 10, unit: 62.5},
            { px : 12, unit: 75},
            { px : 14, unit: 87.5}
        ],
        second: [
            {  px: 16, unit:100},
            {  px: 18, unit:112.5},
            {  px: 20, unit:125},
            {  px: 24, unit:150},
            {  px: 32, unit:200},
            {  px: 64, unit:400},
            {  px: 72, unit:450}
        ]
    };

    useEffect(() => {
        toggleSwitch? setPercent(px * 6.25): setPx(percent / 6.25)
    }, [px, percent]);

    return (
        <Container>
            <Row>
                <FontSize
                    px={px}
                    unit={percent}
                    unitsInfo={unitsInfo}
                    active={active}
                    toggleSwitch={toggleSwitch}
                    setPx={data => setPx(data)}
                    setUnit={data => setPercent(data)}
                    setActive={data => setActive(data)}
                    setToggleSwitch={data => setToggleSwitch(data)}
                />
                <Preview
                    //max font-size in preview
                    px={px >= 72? 72: px}
                    unit={active ? px >= 72? 72 : px : percent >= 450? 450: percent}
                    unitName={active ? 'px' : unitsInfo.unitData.code}
                    setPx={(data) => [setToggleSwitch(true), setPx(data)]}/>
            </Row>
        </Container>
    );
};

export default Third;