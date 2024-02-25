import styled from "styled-components";
import theme from "../../assets/styles/theme";


export const BannerWrapper = styled.section`
    /* width: 75%;
    margin: auto; */
    padding: 20px 0px;
    display: flex;
    gap: 50px;
    align-items: center;
`
export const BannerImageWrapper = styled.div`
    width: 650px;
    /* width: 40%; */
    height: 500px;

    img{
        /* width: 100%; */
        height: 100%;
        width: 650px;
        object-fit: cover;
    }
`
export const BannerContentWrapper = styled.div`
    /* width: auto; */
`
export const BannerFirstRow = styled.div`
    display:flex;
    justify-content: space-between;
`
export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    
    .likeIcon{
        i{
            color: #2a2a2a;
        }
    }
    .bookmarkIcon{
        i{
            color: #2a2a2a;
        }
    }
`