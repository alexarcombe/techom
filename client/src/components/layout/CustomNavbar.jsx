import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

function CustomNavbar() {
  const [active, setActive] = useState('/');

  return (
    <Navbar bg="dark" variant="dark" expand="sm" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand onClick={() => setActive('/')}>Techom</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-nav" />
        <Navbar.Collapse id="basic-nav">
          <Nav className="ml-auto">
            <IndexLinkContainer to="/" className="pl-5">
              <Nav.Link active={active === '/'} onClick={() => setActive('/')}>
                Home
              </Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to="/about" className="pl-5">
              <Nav.Link
                active={active === '/about'}
                onClick={() => setActive('/about')}
              >
                About Us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services" className="pl-5">
              <Nav.Link
                active={active === '/services'}
                onClick={() => setActive('/services')}
              >
                Services
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog" className="pl-5">
              <Nav.Link
                active={active === '/blog'}
                onClick={() => setActive('/blog')}
              >
                Blog
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" className="pl-5">
              <Nav.Link
                active={active === '/contact'}
                onClick={() => setActive('/contact')}
              >
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
