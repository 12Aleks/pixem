import {Container, Navbar, Form} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/pixem.png";
import logo_dark from "../images/pixem_dark.png";

const Header = ({theme, setTheme}) => {

    return (
        <Navbar >
            <Container fluid>
                <Link href="/">
                <Navbar.Brand>
                    <Image
                        alt=""
                        src={theme? logo: logo_dark}
                        className="d-inline-block align-top logo"
                        width={120}
                        height={30}
                    />
                </Navbar.Brand>
                </Link>

                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label='Color theme'
                    onChange={() => setTheme(!theme)}
                />

            </Container>
        </Navbar>
    );
};

export default Header;