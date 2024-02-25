import styled from "styled-components";
import theme from "../../../assets/styles/theme";
import { TabProps } from "../@types";

export const TabButton = styled.button<TabProps>`
    background-color: ${(props) => (props.isActive ? theme.colors.white : 'transparent') };
    color: ${(props) => (props.isActive ? theme.colors.primary : null)};
    border-bottom-color: ${(props) => (props.isActive ? theme.colors.red: 'none')};
    border-bottom: 1px solid;
    padding: 10px 20px;
    cursor: pointer;
    font-family: ${theme.typography.family.secondary};
    font-size: ${theme.typography.sizes.size18};
    font-weight: ${theme.typography.weights.semiBold};
`;

export const TabsListWrapper = styled.div`
  display: flex;
`;

export const TabsContainerWrapper = styled.div`
    
`
