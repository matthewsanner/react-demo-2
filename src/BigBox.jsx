import LittleBox from "./LittleBox";
import "./BigBox.css";

export default function BigBox({ colors }) {
  const boxes = [];
  for (let i = 0; i < 9; i++) {
    boxes.push(<LittleBox key={i} colors={colors} />);
  }
  return <div className="BigBox">{boxes}</div>;
}
