import React, {useEffect, useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu} from './Navbar.elements';
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
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo onClick={backTopFunc}>
                            <NavIcon/>
                            goodSTACK
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes/> : <FaBars/>}
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
                                <AnchorLink href='#s4'>
                                    <NavLinks onClick={closeMobileMenu}>
                                        O MNIE
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