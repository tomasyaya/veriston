import React from "react";

interface TabListProps {
  children: React.ReactNode;
}
function TabList({ children }: TabListProps) {
  return <div>{children}</div>;
}

export default TabList;
