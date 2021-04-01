
import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';



const navBar = () => {
    return (
  <React.Fragment>


    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-auto'/>
    <Navbar.Collapse id="response-navbar-nav">
        <Container>

  
        <Nav className='ml-auto' >
            <Nav.Link className="mr-2">Home</Nav.Link>
            <Nav.Link className="mr-2">Projects</Nav.Link>
            <Nav.Link>Contact</Nav.Link>

        </Nav>
        </Container>
    </Navbar.Collapse>
    </React.Fragment>

    )
}


export default navBar;