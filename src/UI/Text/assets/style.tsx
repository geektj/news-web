import styled from "styled-components";
import theme from "../../../assets/styles/theme";
import { TextProps } from "../@types";


export const StyledText = styled.div<TextProps>`
  font-size: ${({ size = "size14" }) => theme.typography.sizes[size]};
  font-weight: ${({ weight = "regular" }) => theme.typography.weights[weight]};
  color: ${({color = "primary"}) => color}; 
  font-family: ${({family =  "primary"}) => theme.typography.family[family]};
  margin-top: ${({marginTop = "0"}) => marginTop};
  margin-bottom: ${({marginBottom = "0"}) => marginBottom};
`;