import { selectThumb } from "./selector";
import { ThumbNailProp } from "./types";
import { Action } from "../Actions/types";
import { Actions } from "../Actions";
import { ThumbContainer } from "./styles";

function hasActions(actions?: Action[]) {
  return Array.isArray(actions) && actions.length;
}

function ThumbNail({
  type,
  src,
  name,
  actions,
  size = "normal",
}: ThumbNailProp) {
  const Component = selectThumb(type);
  return (
    <ThumbContainer size={size}>
      <Component src={src} alt={name} />
      <p>{name}</p>
      {hasActions(actions) && <Actions actions={actions as Action[]} />}
    </ThumbContainer>
  );
}

export default ThumbNail;
