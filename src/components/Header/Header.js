import React, {useEffect, useState} from 'react';

import Navigation from './NavBar/NavBar'
import HeroSection from './HeroSection/HeroSection';
import {Container, Navbar} from 'react-bootstrap';

const Header = () => {
    const [classes, setClasses] = useState(null);
    const [scrolled, setScrolled] = useState(false);
 
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 65 ){
          setScrolled(true);
          setClasses('scrolled');
        }
        else{
          setScrolled(false);
          setClasses(null);
        }
      }
      useEffect(()=> {
          window.addEventListener('scroll', handleScroll);

      })
    return(
        <header>
     

        
            <Navbar expand="lg" className={['fixed-top',classes].join(' ')} variant="light">
          
                <Container>

              
            <Navigation />
            </Container>
            </Navbar>
        
        

<HeroSection />

        </header>
    )
}










export default Header;