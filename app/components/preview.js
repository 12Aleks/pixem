import {useEffect, useState} from 'react';
import styles from '../styles/Preview.module.scss'
import {Row, Col, FormControl, InputGroup, Form, Button} from "react-bootstrap";

const Preview = ({px, unit, unitName, setPx}) => {
    const [text, setText] = useState('Your text');
    const [color, setColor] = useState('#000000');
    const [style, setStyle] = useState('normal');
    const [family, setFamily] = useState("'Lato', sans-serif");
    const [weight, setWeight] = useState(Number(500));
    const [variant, setVariant] = useState('normal');
    const [stretch, setStretch] = useState('normal');
    const [compress, setCompress] = useState(false);
    const [active, setActive] = useState(false);
    const [size, setSize] = useState(0);
    const fontWeight = [500, 100, 200, 300, 400, 600, 700, 800, 900];

    function reset(){
        setText('Your text');
        setColor('#000000');
        setStyle('normal');
        setFamily("'Lato', sans-serif");
        setWeight(500);
        setVariant('normal');
        setStretch('normal');
    };

    useEffect(() => {
       px && setSize(px);
    }, [px]);

    return (
        <Col md={6} className={styles.preview}>
            <h2>Preview</h2>
            <h6>Enter your text here (max font-size - 72px)</h6>
            <InputGroup>
                <FormControl
                    type="text"
                    placeholder=''
                    value={text}
                    onChange={e => setText(e.target.value)}
                    maxLength="180"
                />
            </InputGroup>
            <div className={styles.text_wrapper}>
                <button className={styles.buttonCode} onClick={() => setActive(!active)}>{!active? 'Show code': 'Hide code'}</button>
                {active && <button className={styles.buttonCompress} onClick={() => setCompress(!compress)}>{!compress? 'Compress code': 'Return'}</button>}
                <div className={active ? styles.codeWrapper: undefined}>
                  <pre>{`
                     p {
                      ${!compress? ` font-size: ${unit}${unitName};
                       font-family: ${family};
                       font-weight: ${weight};
                       line-height: ${unit}${unitName};`:` font:${weight} ${unit}${unitName}/${unit}${unitName} ${family}`}
                       font-variant: ${variant};
                       font-style: ${style};
                       font-stretch: ${stretch};
                       color: ${color};
                      }
                     `}
                  </pre>
                </div>
                <p style={{
                    fontSize: `${size}` + 'px',
                    lineHeight: `${size}` + 'px',
                    color: `${color}`,
                    fontStyle: `${style}`,
                    fontFamily: `${family}`,
                    fontWeight: `${weight}`,
                    fontVariant: `${variant}`,
                    fontStretch: `${stretch}`,
                }}
                >{text}</p>
            </div>
            <Row>
                    <Col md={6}>
                        <Form.Label className={styles.label}>Font family</Form.Label>
                        <Form.Select value={family} onChange={e => setFamily(e.target.value)}>
                            <option value="'Lato', sans-serif">Lato (sans-serif)</option>
                            <option value="'Arial', sans-serif">Arial (sans-serif)</option>
                            <option value="'Helvetica', sans-serif">Helvetica (sans-serif)</option>
                            <option value="'Georgia', serif">Georgia (serif)</option>
                            <option value="'Garamond', serif">Garamond (serif)</option>
                            <option value="'Tahoma', sans-serif">Tahoma (sans-serif)</option>
                            <option value="'Trebuchet MS', sans-serif">Trebuchet MS (sans-serif)</option>
                            <option value="'Times New Roman', sans-serif">Times New Roman (serif)</option>
                            <option value="'Verdana', sans-serif">Verdana (sans-serif)</option>
                        </Form.Select>
                    </Col >
                    <Col md={6}>
                        <Form.Label className={styles.label}>Font weight</Form.Label>
                        <Form.Select value={size} onChange={e => setWeight(e.target.value)}>
                            {
                                fontWeight.map(weight =>
                                    <option value={weight} key={weight}>{weight}</option>
                                )
                            }
                        </Form.Select>
                    </Col>
                <Col md={6} className='mt-3'>
                    <Form.Label className={styles.label}>Font variant</Form.Label>
                    <Form.Select value={variant} onChange={e => setVariant(e.target.value)}>
                        <option value="normal">Normal</option>
                        <option value="small-caps">Small caps</option>
                    </Form.Select>
                </Col>
                    <Col md={6} className='mt-3'>
                        <Form.Label className={styles.label}>Font style</Form.Label>
                        <Form.Select value={style} onChange={e => setStyle(e.target.value)}>
                            <option value="normal">Normal</option>
                            <option value="italic">Italic</option>
                            <option value="oblique">Oblique</option>
                        </Form.Select>
                    </Col>
                    <Col md={6} className='mt-3'>
                        <Form.Label className={styles.label}>Font stretch</Form.Label>
                        <Form.Select value={stretch} onChange={e => setStretch(e.target.value)}>
                            <option value="normal">Normal</option>
                            <option value="ultra-condensed">Ultra condensed</option>
                            <option value="extra-condensed">Extra condensed</option>
                            <option value="condensed">Condensed</option>
                            <option value="semi-condensed">Semi condensed</option>
                            <option value="semi-expanded">Semi expanded</option>
                            <option value="expanded">Expanded</option>
                            <option value="extra-expanded">Extra expanded</option>
                            <option value="ultra-expanded">Ultra expanded</option>
                        </Form.Select>
                    </Col>

                <Col md={6} className='mt-3'>
                    <Form.Label className={styles.label}>Color picker</Form.Label>
                    <Form.Control
                        type="color"
                        id="exampleColorInput"
                        className={styles.formColor}
                        value={color}
                        title="Choose your color"
                        onChange={e => setColor(e.target.value)}
                    />
                </Col>
                <Col md={12} className='d-flex justify-content-end'>
                    <Button variant="dark" onClick={() => [reset(), setPx(16)]} className={styles.darkBtn}>Reset preview</Button>
                </Col>
                </Row>
        </Col>
    );
};

export default Preview;