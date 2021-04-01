import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Envelope} from 'react-bootstrap-icons';
const footer = () => {
return(
    <footer className=" d-flex  align-items-center  mt-5">
  <Container  >
    <Col>
 
<h3>Contacts</h3>
<Row className="ml-0 align-items-center">
  <p className="mr-2"> <Envelope className="mr-1"/> Email : </p> 
  <p>DoniGeorgieva16@gmail.com</p>
</Row>

</Col>
  </Container>

    </footer>
)
}



export default footer;