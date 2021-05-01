import React from "react";
import { useTabs } from "./TabsContext";

interface TabPanelProp {
  value: string;
  children: React.ReactNode;
}

function TabPanel({ value, children }: TabPanelProp) {
  const { selectedTab } = useTabs();
  const isActive = selectedTab === value;
  return (
    <div style={{ display: !isActive ? "none" : "block" }}>{children}</div>
  );
}

export default TabPanel;
