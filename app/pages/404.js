import MainContainer from "../components/MainContainer";
import {Container, Row, Col} from "react-bootstrap";
import Link from "next/link";


export default function Error() {
    return (
        <MainContainer title={'Error'} keywords={'Error'}>
            <Container className='main error'>
                <Row>
                    <Col>
                        <h1>
                            404
                        </h1>
                        <p>We can't find the page that you're looking for. Check the URL and try again.</p>
                        <p><Link href="/"><u>Return to home page</u></Link></p>
                    </Col>
                </Row>
            </Container>
        </MainContainer>
    )
};