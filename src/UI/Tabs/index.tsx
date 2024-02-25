import React from "react";
import { TabProps } from "./@types";
import { TabButton } from "./assets/style";

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
  return (
    <TabButton isActive={isActive} onClick={onClick}>
      {label}
    </TabButton>
  );
};

export default Tab;
