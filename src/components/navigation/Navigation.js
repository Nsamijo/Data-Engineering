import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";
import {Link, Route} from "react-router-dom";
import Home from "../home/Home";
import About from "../about/about";

import "./navigation.css";
import Leerdoelen from "../Leerdoelen/leerdoelen";

class Navigation extends React.Component {
    render() {
        return (
            <>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/Data-Engineering">Portfolio Nathan K. Samijo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav variant="tabs" className="me-auto">
                                <Nav.Link eventKey="/Lectures" activeClassName="chosen">
                                    <Link
                                        to="/Lectures"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'inherit',
                                            display: 'contents'
                                        }}
                                    >
                                        Lectures
                                    </Link>
                                </Nav.Link>
                                <Nav.Link eventKey="/Casus" activeClassName="chosen">
                                    <Link
                                        to="/Casus"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'inherit',
                                            display: 'contents'
                                        }}
                                    >
                                        Casus
                                    </Link>
                                </Nav.Link>
                                <Nav.Link eventKey="/About" activeClassName="chosen">
                                    <Link
                                        to="/About"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'inherit',
                                            display: 'contents'
                                        }}
                                    >
                                        Algemene Informatie
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="content">
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/Lectures">
                            <Leerdoelen/>
                        </Route>
                    <Route exact path={"Casus"}>
                        <div>
                            Coming soon
                        </div>
                    </Route>
                        <Route exact path="/About">
                            <About/>
                        </Route>
                </Container>
            </>
        );
    }
}

export default Navigation;