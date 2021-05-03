import { selectThumb } from "./selector";
import { ThumbNailProp } from "./types";
import { Action } from "../Table/types";

function hasActions(actions?: Action[]) {
  return Array.isArray(actions) && actions.length;
}

function Actions({ actions }: { actions: Action[] }) {
  return (
    <div>
      {actions.map(({ label, action, icon: Icon }) => {
        return (
          <button onClick={action} key={label}>
            <Icon height={15} width={15} />
          </button>
        );
      })}
    </div>
  );
}

function ThumbNail({ type, src, name, actions }: ThumbNailProp) {
  const Component = selectThumb(type);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Component src={src} alt={name} />
      <p>{name}</p>
      {hasActions(actions) && <Actions actions={actions as Action[]} />}
    </div>
  );
}

export default ThumbNail;
