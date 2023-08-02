import "./LittleBox.css";
import { useState } from "react";

function randomChoice(arr) {
  let randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

export default function LittleBox({ colors }) {
  const [color, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };
  return (
    <div
      onClick={changeColor}
      className="LittleBox"
      style={{ backgroundColor: color }}></div>
  );
}
