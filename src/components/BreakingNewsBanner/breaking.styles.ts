import styled from "styled-components";
import theme from "../../assets/styles/theme";

export const BreakingNewsContainer = styled.div`
    /* width: 75%; */
    display: flex;
    background-color: ${theme.colors.red};
    height: 80px;
    margin: 40px auto;
    align-items: center;
    padding: 10px 0px;
`

export const BreakingNewsWrapper = styled.div`
    width: 70%;
    margin: auto;
    display: flex;
    align-items: center;
    gap: 40px;

    .newsBox{
        width: 150px;
        height: 54px;
        background-color: ${theme.colors.white};
        display: flex;
        align-items: center;
        justify-content: center;
    }
`