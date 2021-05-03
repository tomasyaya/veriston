import React from "react";

export function childrenToArray(children: React.ReactNode) {
  return React.Children.toArray(children);
}
export function getCurrentElement(children: React.ReactNode, position: number) {
  return childrenToArray(children)[position];
}

export function getLastPosition(children: React.ReactNode) {
  return childrenToArray(children).length - 1;
}
