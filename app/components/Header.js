import {Container, Navbar, Form} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/pixem.png";
import logo_dark from "../images/pixem_dark.png";
import {useSelector, useDispatch} from "react-redux";
import {toggleTheme} from '../store/themeSlice'

const Header = () => {
    const selector = useSelector(state => state.colorTheme.value);
    const dispatch = useDispatch();

    return (
        <Navbar >
            <Container fluid>
                <Link href="/">
                <Navbar.Brand>
                    <Image
                        alt=""
                        src={selector.payload? logo: logo_dark}
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
                    onChange={() => dispatch(toggleTheme(!selector.payload))}
                />

            </Container>
        </Navbar>
    );
};

export default Header;