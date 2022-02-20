import {useState, useEffect} from 'react';
import {Container, Row} from 'react-bootstrap';
import Preview from "../preview";
import FontSize from "../fontSize";

const First = () => {
    const [rem, setRem] = useState(1);
    const [px, setPx] = useState(16);
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const [active, setActive] = useState(true);
    const unitsInfo = {
        unitData: {
            name: 'Rem',
            code: 'rem',
            description: "(rem): The 'rem' unit is based upon the font-size value of the root element, which is the element. And if the element doesn’t have a specified font-size, the browser default value of 16px is used. So here only the value of the root is considered, and there is no relation with a parent element."
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
        toggleSwitch ? setRem(px / 16) : setPx(rem * 16)
    }, [px, rem]);

    return (
        <Container>
            <Row>
                <FontSize
                    px={px}
                    unit={rem}
                    unitsInfo={unitsInfo}
                    active={active}
                    toggleSwitch={toggleSwitch}
                    setPx={data => setPx(data)}
                    setUnit={data => setRem(data)}
                    setActive={data => setActive(data)}
                    setToggleSwitch={data => setToggleSwitch(data)}
                />
                <Preview
                    //max font-size in preview
                    px={px >= 72? 72: px}
                    unit={active ? px >= 72? 72 : px : rem >= 4.5? 4.5: rem}
                    unitName={active ? 'px' : unitsInfo.unitData.code}
                    setPx={(data) => [setToggleSwitch(true), setPx(data)]}/>
            </Row>
        </Container>
    );
};

export default First;