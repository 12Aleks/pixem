import {useState} from "react";
import {Col, FormControl, InputGroup, Row} from "react-bootstrap";
import {ArrowLeftRight} from "react-bootstrap-icons";
import UniversalTable from "./UniversalTable";
import styles from '../styles/FontSize.module.scss'


const FontSize = ({ px, setPx,  unit, setUnit, unitsInfo, active, setActive, toggleSwitch,  setToggleSwitch}) => {
    const [position, setPosition] = useState(false);

    function inputFun(data) {
        setToggleSwitch(!toggleSwitch);
        active !== data && setActive(data)
    }
    
    return (
        <Col sm={12} md={12} lg={6} xl={6}>
            <h2>Font size</h2>
            <Row>
                <Col md={12} className='order-0'>
                    <div className={`${styles.inputWrapper} ${position ? "flex-row-reverse": undefined}`}>
                        <div>
                            <h4>Px</h4>
                            <InputGroup size="lg"
                                        className={`${styles.inputGroup} ${active ? 'active': undefined}`}
                                        onClick={() => inputFun(true)}>
                                <FormControl
                                    type="text"
                                    value={px}
                                    onChange={e => setPx(e.target.value)}
                                    />
                                <InputGroup.Text>px</InputGroup.Text>
                            </InputGroup>
                        </div>

                        <div onClick={() => setPosition(!position)}>
                            <ArrowLeftRight  size={20}/>
                        </div>

                        <div>
                            <h4>{unitsInfo.unitData.name}</h4>
                            <InputGroup size="lg"
                                        onClick={() => inputFun(false)}
                                        className={`${styles.inputGroup} ${!active ? 'active': undefined}`}>
                                <FormControl type="text"
                                             value={unit}
                                             onChange={e => setUnit(e.target.value)}
                                              />
                                <InputGroup.Text >{unitsInfo.unitData.code}</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                </Col>
                <Col md={6} className={`${styles.textWrapper} ${position ? 'order-1': undefined}`}>
                    <p><b>Pixel</b> (px): Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of your screen’s resolution). One problem with the pixel unit is that it does not scale upward for visually-impaired readers or downward to fit mobile devices.</p>
                </Col>
                <Col md={6} className={`${styles.textWrapper} ${!position ? 'order-1': undefined}`}>
                    <p><b>{unitsInfo.unitData.name}</b> {unitsInfo.unitData.description}</p>
                </Col>
                <Col md={12} className={`order-2 ${styles.tableWrapper}`}>
                    <UniversalTable
                        unitData={unitsInfo.unitData}
                        tableContent={unitsInfo.first}
                        updatePx={data => [setToggleSwitch(true), setPx(data)]}
                    />
                    <UniversalTable
                        unitData={unitsInfo.unitData}
                        tableContent={unitsInfo.second}
                        updatePx={data => [setToggleSwitch(true), setPx(data)]}
                    />
                </Col>
            </Row>
        </Col>
    );
};

export default FontSize;