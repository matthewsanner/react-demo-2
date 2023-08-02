export default function Clicker({ message, buttonText }) {
  const handleClick = () => {
    alert(message);
  };
  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
    // <div>
    //   <p onMouseOver={handleHover}>Click the Button</p>
    //   <button onClick={handleClick}>Click</button>
    // </div>
  );
}

// function handleClick() {
//   console.log("Clicked the button!");
// }

// function handleHover() {
//   console.log("Hovered the text!");
// }
