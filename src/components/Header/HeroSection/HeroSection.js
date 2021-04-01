import React, {useEffect} from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import HeroImage from "../../../images/development.svg";
import styles from "./HeroSection.module.scss";
import {ArrowDown} from 'react-bootstrap-icons';
import { Link, animateScroll as scroll } from "react-scroll";
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const heroSection = () => {
  return (
    <section
      className={[styles.HeroSection, "d-flex align-items-center"].join(" ")}
    >
      <Container>
        <Row className="align-items-center justify-content-center " >
         

        <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            opacity: 0,
           scale: .9,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5
            }
          }
        }}className={["col", styles.Center].join(' ')}>



            <h1>Hello,</h1>
            <h2>My name is Donka Georgieva.</h2>
            <h2>
              A <strong className="highlight">Frontend Developer</strong>
            </h2>
            <h2>That respects design.</h2>

<Link to="projects"   activeClass="active" spy={true} smooth={true} offset={-70}
          duration={350}
              className="btn btn-primary my-3 mr-2 py-2 px-4 shadow-none"
            >
              Projects <ArrowDown />
            </Link>
            <Button 
              variant="outline-primary"
              className="my-3 ml-2 py-2 px-4 shadow-none"
            >
              Contact
            </Button>

            </motion.div>
   
        
          <motion.div initial="hidden" animate="visible" variants={{
            hidden:{
              x: 100,
              opacity: 0,

            }, 
            visible:{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5
              }
            }
          }} className="col-md-6 d-flex justify-content-center flex-column  d-md-block" >
            <img src={HeroImage} className={styles.Image} />
          </motion.div>
        </Row>
      </Container>
    </section>
  );
};

export default heroSection;
