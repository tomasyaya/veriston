import React from "react";
import { useTabs } from "./TabsContext";
import { TabPanelContainer } from "./styles";

interface TabPanelProp {
  value: string;
  children: React.ReactNode;
}

function TabPanel({ value, children }: TabPanelProp) {
  const { selectedTab } = useTabs();
  const isActive = selectedTab === value;
  return <TabPanelContainer isActive={isActive}>{children}</TabPanelContainer>;
}

export default TabPanel;
