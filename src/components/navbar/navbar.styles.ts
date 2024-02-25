import styled from 'styled-components';
import theme from '../../assets/styles/theme';

export const HeaderContainer = styled.header`
    background-color: ${theme.colors.white};
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
`

export const ContainerBox = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;

`

export const LogoContainer = styled.div`
    width: 65px;
    height: 55px;

    img{
        width:100%;
        height: 100%;
    }
`

export const NavLinks = styled.nav`
    gap: 4rem;
    display: flex;

`

export const NavbarLink = styled.a`
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.primary};
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;

`
