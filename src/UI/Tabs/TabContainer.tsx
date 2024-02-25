import React, { useState } from "react";
import { TabsContainerProps } from "./@types";
import { TabsContainerWrapper } from "./assets/style";
import TabList from "./TabList";

const TabsContainer: React.FC<TabsContainerProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <TabsContainerWrapper>
      <TabList
        activeTab={activeTab}
        onTabClick={handleTabClick}
        tabs={[
          { label: "Tab 1", key: "tab1" },
          { label: "Tab 2", key: "tab2" },
          { label: "Tab 3", key: "tab3" },
        ]}
      />
      {/* {React.Children.map(children, (child, index) =>
        index === activeTab ? <div>{child}</div> : null
      )} */}
    </TabsContainerWrapper>
  );
};
export default TabsContainer;
