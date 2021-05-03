import { Icon } from "../Icons/types";

export interface Action {
  label: string;
  action: () => void;
  icon: Icon;
}

export interface ActionsProps {
  actions: Action[];
}
