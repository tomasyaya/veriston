import React from "react";
import { TabListContainer } from "./styles";

interface TabListProps {
  children: React.ReactNode;
}
function TabList({ children }: TabListProps) {
  return <TabListContainer>{children}</TabListContainer>;
}

export default TabList;
