import styled from "styled-components";
import theme from "../../../assets/styles/theme";
import { ButtonProps } from "../@types";

export const StyledButton = styled.button<ButtonProps>`
    width: ${(props) => props.width || '100px'};
    height: ${(props) => props.height || '40px'};
    background-color: ${(props) => theme.colors[props.bgColor || 'red']};
    border-radius: ${(props) => props.borderRadius || '0'};
    border: ${(props) => props.border || '1px solid'};
    padding: 20px;
    cursor: pointer;

` 