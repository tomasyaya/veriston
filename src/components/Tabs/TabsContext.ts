import React from "react";

interface TabsContext {
  selectedTab: string;
  setSelectedTab: (t: string) => void;
}

const initialState: TabsContext = {
  selectedTab: "",
  setSelectedTab: () => {},
};

export const TabsCtx = React.createContext<TabsContext>(initialState);

export function useTabs() {
  return React.useContext(TabsCtx);
}
