import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import OFlow from './OFlow';
import BFlow from './BFlow';
import FFlow from './FFlow'

export default class NavbarComp extends Component {
    render() {
      const nav = { padding:"0 2rem" };
        return (
            <BrowserRouter>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">Wealth Flow</Navbar.Brand>
                            <Nav className="ml-auto">
                                <Nav.Link style={nav} as={Link} to="/">平流</Nav.Link>
                                <Nav.Link style={nav} as={Link} to="/bflow">逆流</Nav.Link>
                                <Nav.Link style={nav} as={Link} to="/fflow">順流</Nav.Link>
                            </Nav>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route path="/bflow" element={<BFlow/>} />
                        <Route path="/fflow" element={<FFlow/>} />
                        <Route exact path="/" element={<OFlow/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}
