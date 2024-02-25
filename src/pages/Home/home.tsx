import React from 'react';
import styled from 'styled-components';
import theme from '../../assets/styles/theme';
import Banner from '../../components/banner/banner';
import BreakingNewsBanner from '../../components/BreakingNewsBanner/breaking';
import NewsStories from '../../components/NewsStory';


const HomeContainer = styled.div`
    background-color: ${theme.colors.grey};
    width: 100%;
    height: auto;
`

const HomeWrapper = styled.div`
    width: 75%;
    margin: auto;
`

const Home = () => {
    return(
        <HomeContainer>
            <HomeWrapper>
                <Banner />
                <BreakingNewsBanner headlines={''} />
                <NewsStories></NewsStories>
            </HomeWrapper>
        </HomeContainer>
    )
}
export default Home;