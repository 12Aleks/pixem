import {useEffect, useState} from 'react';
import {Container, Row} from 'react-bootstrap';
import Preview from "../Preview";
import FontSize from "../FontSize";

const Second = () => {
    const [em, setEm] = useState(1);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [active, setActive] = useState(true);
    const unitsInfo = {
        unitData: {
            name: 'Em',
            code: 'em',
            description: "(em): The “em” is a scalable unit that is used in web document media. An em is equal to the current font-size, for instance, if the font-size of the document is 12pt, 1em is equal to 12pt. Ems are scalable in nature, so 2em would equal 24pt, .5em would equal 6pt, etc. Ems are becoming increasingly popular in web documents due to scalability and their mobile-device-friendly nature."
        },
        first: [
            {px: 1, unit: 0.0625},
            {px: 2, unit: 0.125},
            {px: 4, unit: 0.25},
            {px: 8, unit: 0.5},
            {px: 10, unit: 0.625},
            {px: 12, unit: 0.75},
            {px: 14, unit: 0.875}
        ],
        second: [
            {px: 16, unit: 1},
            {px: 18, unit: 1.125},
            {px: 20, unit: 1.25},
            {px: 24, unit: 1.5},
            {px: 32, unit: 2},
            {px: 64, unit: 4},
            {px: 72, unit: 4.5}
        ]
    };

    useEffect(() => {
        toggleSwitch? setEm(px / 16): setPx(em * 16)
    }, [px, em]);

    const inputFun = () => setToggleSwitch(!toggleSwitch);

    return (
        <Container>
            <Row>
                <FontSize
                    px={px}
                    unit={em}
                    unitsInfo={unitsInfo}
                    active={active}
                    toggleSwitch={toggleSwitch}
                    setPx={data => setPx(data)}
                    setUnit={data => setEm(data)}
                    setActive={data => setActive(data)}
                    setToggleSwitch={data => setToggleSwitch(data)}
                />
                <Preview
                    //max font-size in preview
                    px={px >= 72? 72: px}
                    unit={active ? px >= 72? 72 : px : em >= 4.5? 4.5: em}
                    unitName={active ? 'px' : unitsInfo.unitData.code}
                    setPx={(data) => [setToggleSwitch(true), setPx(data)]}/>
            </Row>
        </Container>
    );
};

export default Second;