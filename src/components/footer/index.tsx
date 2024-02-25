import React from 'react';
import { FooterSection, FooterContainer, FooterLogoContainer,FooterItems, FooterSocialLinks, FooterItem, FooterIcons } from './footer.styles';
import Logo from '../../assets/svg/logo.png'

const Footer:React.FC = () => {
  return(
    <FooterSection>
      <FooterContainer>
        <FooterLogoContainer>
          <img src={Logo} alt='logo'/>
        </FooterLogoContainer>
        <FooterItems>
          <FooterItem>Blog</FooterItem>
          <FooterItem>About Us</FooterItem>
          <FooterItem>Contact Us</FooterItem>
          <FooterItem>Privacy Policy</FooterItem>
          <FooterItem>Community</FooterItem>
          <FooterItem>FAQ</FooterItem>
          <FooterItem>Terms of Service</FooterItem>
        </FooterItems>
        <FooterSocialLinks>
          <FooterIcons>
            <i className="fa-brands fa-instagram"></i>
          </FooterIcons>
          <FooterIcons>
            <i className="fa-brands fa-facebook"></i>
          </FooterIcons>
          <FooterIcons>
            <i className="fa-brands fa-twitter"></i>
          </FooterIcons>
          <FooterIcons>
            <i className="fa-brands fa-reddit-alien"></i>
          </FooterIcons>
        </FooterSocialLinks>
      </FooterContainer>
    </FooterSection>
  )
}
  
export default Footer;