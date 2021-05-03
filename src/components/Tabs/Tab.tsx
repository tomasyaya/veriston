import React from "react";
import { useTabs } from "./TabsContext";
import { TabBtn } from "./styles";

interface TabProps {
  children: React.ReactNode;
  value: string;
}

function Tab({ children, value }: TabProps) {
  const { selectedTab, setSelectedTab } = useTabs();
  const handleClick = () => {
    const hasDiffValue = selectedTab !== value;
    if (hasDiffValue) {
      setSelectedTab(value);
    }
  };
  return (
    <TabBtn type="button" role="tab" onClick={handleClick}>
      {children}
    </TabBtn>
  );
}

export default Tab;
