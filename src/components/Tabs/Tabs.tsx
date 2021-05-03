import React from "react";

import { TabsCtx } from "./TabsContext";
import { TabsContainer } from "./styles";

interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
}

function Tabs({ children, defaultValue }: TabsProps) {
  const [selectedTab, setSelectedTab] = React.useState<string>(defaultValue);
  return (
    <TabsCtx.Provider value={{ selectedTab, setSelectedTab }}>
      <TabsContainer>{children}</TabsContainer>
    </TabsCtx.Provider>
  );
}

export default Tabs;
