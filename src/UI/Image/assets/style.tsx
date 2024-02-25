import styled from "styled-components";
import theme from "../../../assets/styles/theme";
import { ImageProps } from "../@types";

export const StyledImage = styled.img<ImageProps>`
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
    object-fit: ${(props) => props.objectFit || 'cover'};
`