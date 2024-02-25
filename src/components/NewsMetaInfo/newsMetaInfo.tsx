import React from 'react';
import { NewsMetaInfoProps } from './@types';
import { MetaInfoWrapper } from './styles/style';

const NewsMetaInfo: React.FC<NewsMetaInfoProps> = ({authorName, readTime, updatedAt}) => {
    return (
        <MetaInfoWrapper>
            <div>{updatedAt} hours ago</div>
            <div><span>By</span>{authorName}</div>
            <span>|</span>
            <div>{readTime} read</div>
        </MetaInfoWrapper>
    )
}
export default NewsMetaInfo;