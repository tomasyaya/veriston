import React from "react";
import { useTabs } from "./TabsContext";

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
    <button type="button" role="tab" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Tab;
