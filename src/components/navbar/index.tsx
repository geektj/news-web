import React from 'react';
import Logo from '../../assets/svg/logo.png';
import {HeaderContainer,ContainerBox,LogoContainer,NavLinks,NavbarLink} from './navbar.styles';

const Navbar: React.FC = () => {
   return (
    <HeaderContainer>
        <ContainerBox>
            <LogoContainer>
                <img src={Logo} alt='logo' />
            </LogoContainer>
            <NavLinks>
                <NavbarLink className="nav-link active" href="/home">
                    Home
                </NavbarLink>
                <NavbarLink className="nav-link" href="/politics">
                    Politics
                </NavbarLink>
                <NavbarLink className="nav-link" href="/business">
                    Business
                </NavbarLink>
                <NavbarLink className="nav-link" href="/sports">
                    Sports
                </NavbarLink>
                <NavbarLink className="nav-link" href="/world">
                    World
                </NavbarLink>
            </NavLinks>
        </ContainerBox>
    </HeaderContainer>
   )
}

export default Navbar;