import {Container, Navbar, Form} from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/pixem.png";
import React from "react";

const Header = () => {
    return (
        <>
        <Navbar >
            <Container fluid>
                <Link href="/">
                <Navbar.Brand>
                    <Image
                        alt=""
                        src={logo}
                        className="d-inline-block align-top logo"
                        width={120}
                        height={30}
                    />
                </Navbar.Brand>
                </Link>

                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Color theme"
                />

            </Container>
        </Navbar>
     </>

    );
};

export default Header;