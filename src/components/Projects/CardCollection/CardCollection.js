import React from 'react';
import {  Row, Col} from 'react-bootstrap';
import SingleCard from './SingleCard/SingleCard';





const cardCollection = (props) => {
    const projects = props.projects.map((project, index)=> {
       return <SingleCard title={project.title} text={project.text} image={project.image} 
        tech={project.tech} key={index} demoLink={project.demoLink} codeLink={project.codeLink} />

    })
    return(
   
        <Row className="mt-5 justify-content-center justify-content-md-start" >
        
            {projects}
           

         </Row>
    

    )

 


}

export default cardCollection;