export default function ListPicker({ values }) {
  let valueArray;

  if (Array.isArray(values)) {
    valueArray = values;
  } else if (typeof values === "object") {
    valueArray = Object.values(values); // Convert object values to an array
  } else {
    valueArray = [values]; // For other types, convert to a single-element array
  }

  const randIdx = Math.floor(Math.random() * valueArray.length);
  const randElement = valueArray[randIdx];

  return (
    <div>
      <p>The list of values: {valueArray.join(", ")}</p>
      <p>Random element is: {randElement}</p>
    </div>
  );
}
