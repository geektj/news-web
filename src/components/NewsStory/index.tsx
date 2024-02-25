import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
// import Tab from '../../UI/Tabs';
// import TabList from '../../UI/Tabs/TabList';
// import { TabListProps } from '../../UI/Tabs/@types';
import Card from '../../UI/Card';
import { NewsContext } from '../../context/NewsProvider';

const NewsStoriesWrapper = styled.div`
    width: 70%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

const NewsStories: React.FC= () => {
    // const handleClick = () => {
    //     console.log('jhel')
    // }
    const {news, getNews} = useContext(NewsContext);
    console.log('news', news);

    // const {news, getNews} = context

    useEffect(() => {

        if (getNews) {
            getNews();
        }
    },[getNews])
    
    return (
        <NewsStoriesWrapper>
            
            {/* <Tab onClick={handleClick} isActive>Latest Stories</Tab> */}
            {/* <Card 
                width='350px'
                height='520px'
                bgColor='white'
            >
                Hello world
            </Card>
            <Card 
                width='350px'
                height='520px'
                bgColor='white'
            >
                Hello world
            </Card>
            <Card 
                width='350px'
                height='520px'
                bgColor='white'
            >
                Hello world
            </Card>
            <Card 
                width='350px'
                height='520px'
                bgColor='white'
            >
                Hello world
            </Card> */}
        </NewsStoriesWrapper>
    )
}  

export default NewsStories;