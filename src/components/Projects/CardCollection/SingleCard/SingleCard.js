import React from 'react';
import { Button, Card, Container,Row} from 'react-bootstrap';
import styles from './SingleCard.module.scss';
import {Laptop, Code} from 'react-bootstrap-icons';
import {motion} from 'framer-motion';

const singleCard = (props) => {
 
    return(



        <motion.article className="card shadow">
     <img variant="top" src={props.image} className={styles.Image} />
     <Card.Body className="py-5">
     <Card.Title className={styles.Title}>{props.title}</Card.Title>
     <Card.Text>{props.text}</Card.Text>
  







     <Button variant="primary" href={props.demoLink} target="_blank" className="my-3 mr-2 py-2 px-3 shadow-none">Demo <Laptop  /> </Button>
   


   
     <Button variant="outline-primary" href={props.codeLink} target="_blank" className="my-3 mr-2 py-2 px-3 shadow-none">Code <Code /> </Button>


     </Card.Body>
     <Card.Footer>Built with <strong>{props.tech} </strong></Card.Footer>
     </motion.article>

    )

 


}

export default singleCard;