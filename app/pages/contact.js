import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/Contact.module.scss';
import skype from '../images/skype.png'
import facebook from '../images/facebook .png';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import MainContainer from "../components/MainContainer";

const Contact = () => {
    return (
        <MainContainer  title={'Contact page'} keywords={'Contact page'}>
        <div className='contact'>
            <Container className='main'>
                <Row>
                    <Col sm={{span: 12, offset: 0}} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
                        <h1>Contact</h1>
                        <p>If you have any questions or suggestions, you can contact me by:</p>
                        <div className={styles.socialMedia}>
                            <Link href="skype:terma244">
                                <div>
                                    <Image className='social' src={skype} width={40} height={40}/>
                                </div>
                            </Link>

                           <Link href="https://www.facebook.com/profile.php?id=100002408135162">
                               <div><Image src={facebook} width={40} height={40}/></div>
                           </Link>
                            <Link href="https://www.linkedin.com/in/leszek-koba-78130b140/">
                                <div> <Image src={linkedin} width={40} height={40}/></div>
                            </Link>
                            <Link href="mailto:otpusk.kiev@gmail.com">
                                <div>
                                    <Image src={email} width={40} height={40}/>
                                </div>
                            </Link>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
        </MainContainer>
    );
};

export default Contact;