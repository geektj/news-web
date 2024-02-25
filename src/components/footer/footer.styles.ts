import styled from "styled-components";
import theme from "../../assets/styles/theme";

export const FooterSection = styled.footer`
    width:100%;
    background-color: ${theme.colors.darkBlue};

    
`
export const FooterContainer = styled.div`
    width:60%;
    margin:auto;
    padding: 50px 0px;
    display: flex;
    gap: 100px;
`

export const FooterLogoContainer = styled.div`
    width: 65px;
    height: 55px;

    img{
        width:100%;
        height: 100%;
    }
`

export const FooterItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-self:flex-start;
    row-gap: 10px;
`
export const FooterItem = styled.li`
    color: ${theme.colors.white};
    font-size: 14px;
    font-family: ${theme.fonts.secondary};
    font-weight: 400;
    flex: 0 0 50%;
    cursor: pointer;
`

export const FooterSocialLinks = styled.ul`
    list-style: none;
    margin:0;
    padding:0;
    display: flex;
    align-self: flex-start;
    gap: 20px;
`

export const FooterIcons = styled.li`
    color: ${theme.colors.white};
    font-size: 20px;
    cursor: pointer;
`