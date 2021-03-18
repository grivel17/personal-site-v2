import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './Navbar.elements';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const backTopFunc = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
          
              <NavLogo onClick={backTopFunc}>
             
                <NavIcon />
                insCODE
               
              </NavLogo>
            
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            
              <NavItem>
                <AnchorLink href='#s1'>
                  <NavLinks onClick={closeMobileMenu}>
                    OFERTA 
                  </NavLinks>
                </AnchorLink>
              </NavItem>
              
              <NavItem>
                <AnchorLink href='#s2'>
                  <NavLinks onClick={closeMobileMenu}>
                    CENNIK 
                  </NavLinks>
                </AnchorLink>
              </NavItem>
              
              <NavItem>
              <AnchorLink href='#s3'>
                <NavLinks onClick={closeMobileMenu}>
                  ZGARNIJ 500 
                </NavLinks>
              </AnchorLink>
              </NavItem>
              
              <NavItem>
                <AnchorLink href='#s4'>
                  <NavLinks onClick={closeMobileMenu}>
                    JA 
                  </NavLinks>
                </AnchorLink>
              </NavItem>
              
              <NavItem>
                <AnchorLink href='#s5'>
                  <NavLinks onClick={closeMobileMenu}>
                    KONTAKT
                  </NavLinks>
                </AnchorLink>
              </NavItem>

            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;