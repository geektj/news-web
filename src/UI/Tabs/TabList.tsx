import React from 'react';
import { TabListProps } from './@types';
import { TabsListWrapper } from './assets/style';
import Tab from '.';


const TabList: React.FC<TabListProps> = ({activeTab, onTabClick, tabs}) => {
    return (
        <TabsListWrapper>
            {tabs.map((tab, index) => (
                <Tab 
                    key={tab.key}
                    label={tab.label}
                    isActive={index === activeTab}
                    onClick={() => onTabClick(index)}
                />
            ))}
        </TabsListWrapper>
    )
}

export default TabList;