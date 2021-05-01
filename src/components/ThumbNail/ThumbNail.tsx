import { selectThumb } from "./selector";
import { ThumbNailProp } from "./types";

function ThumbNail({ type, src, name }: ThumbNailProp) {
  const Component = selectThumb(type);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Component src={src} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default ThumbNail;
