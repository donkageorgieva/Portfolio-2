import React, {useEffect} from 'react';

import {Container, Col} from 'react-bootstrap';
import CardCollection from './CardCollection/CardCollection';
import Image1 from '../../images/Cat-Facts.PNG';
import Image2 from '../../images/shortly.png';
import Image3 from '../../images/wineshop.png';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './Projects.scss';
const Projects = () => {
    const animationVariants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition :{
                duration: 0.8
            }
        }
    }
    const controls = useAnimation();
    const { ref, inView} = useInView();
    useEffect(()=> {
        if(inView){
            controls.start('visible');
        } else{
            controls.start('hidden');
        }
        
    }, [controls, inView])
    const allProjects = [{
        image: Image1,
        title: "Cat Facts Web APP",
        text: 'An app that uses "The Cat API" to fetch data about different cat breeds. ',
        tech: "React, Bootstrap, Axios",
        demoLink: "https://donkageorgieva.github.io/Cat-Facts/",
        codeLink: "https://github.com/donkageorgieva/Cat-Facts",
    },{
        image: Image2,
        title: "Shortly - shorten a link",
        text: "Shortly is a responsive website that uses the shrtcode API to shorten any link. All generated links are saved using local storage. ",
        tech: "Javascript, HTML,  SASS, and jQuery.",
        demoLink: "https://donkageorgieva.github.io/Shortly/",
        codeLink: "https://github.com/donkageorgieva/Shortly",
    },
    {
        image: Image3,
        title: "Wine Shop",
        text: "A responsive wine shop website with custom built shopping cart with full functionality.  ",
        tech: "Javascript, HTML,  SASS, and jQuery.",
        codeLink: "https://github.com/donkageorgieva/Wine-Shop",
        demoLink: "https://donkageorgieva.github.io/Wine-Shop/",
    }
]
    return(
     
        <motion.main initial="hidden" ref={ref} animate={controls} variants={animationVariants} className=" d-flex  align-items-center" >
<Container id="projects">

<Col className="d-flex justify-content-center justify-content-md-start">
<h1  ><span className="highlight">Projects</span> </h1>
</Col>

 
    <CardCollection projects={allProjects}/>

    </Container>
        </motion.main>
    
    )
}





export default Projects;