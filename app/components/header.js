import {Container, Navbar} from "react-bootstrap";
import Image from "next/image";
import logo from "../images/pixem.png";
import React from "react";

const Header = () => {
    return (
        <>
        <Navbar >
            <Container fluid>
                <Navbar.Brand href="">
                    <Image
                        alt=""
                        src={logo}
                        className="d-inline-block align-top logo"
                        width={120}
                        height={30}
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
     </>

    );
};

export default Header;