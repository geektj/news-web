import styled from "styled-components";
import theme from "../../../assets/styles/theme";
import { CardProps } from "../@types";

export const StyledCard = styled.div<CardProps>`
    width: ${(props) => props.width || '200px'};
    height: ${(props) => props.height || '150px'};
    box-shadow: ${(props) => props.boxShadow || '0 4px 8px rgba(0, 0, 0, 0.1)'};
    background-color: ${(props) => theme.colors[props.bgColor || 'white'] };
    border-radius: ${(props) => props.borderRadius || '0px'};
    border: ${(props) => props.border || '1px solid transparent'};
`