import { IconButton } from "./styles";
import { ActionsProps } from "./types";

function Actions({ actions }: ActionsProps) {
  return (
    <div>
      {actions.map(({ label, action, icon: Icon }) => {
        return (
          <IconButton onClick={action} key={label}>
            <Icon height={15} width={15} />
          </IconButton>
        );
      })}
    </div>
  );
}

export default Actions;
