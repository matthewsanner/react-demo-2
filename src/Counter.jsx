// With data that you want to change, you need to use state for data fetched from an API, form information, variables for showing/hiding, etc.
import { useState } from "react";
export default function Counter() {
  const [num, setNum] = useState(5);
  const changeNum = () => {
    setNum(num + 1);
  };
  return (
    <div>
      <p>The count is: {num}</p>
      <button onClick={changeNum}>Increment</button>
    </div>
  );
}

// This doesn't work because it doesn't rerender the component when it updates, so we need to use state
// export default function Counter() {
//   let num = 0;
//   const incrementNum = () => {
//     num += 1;
//     console.log(num);
//   };
//   return (
//     <div>
//       <p>The count is: {num}</p>
//       <button onClick={incrementNum}>Increment</button>
//     </div>
//   );
// }

// This also doesn't work because props are immutable and can't be changed like that
// export default function Counter({ num }) {
//   const incrementNum = () => {
//     num += 1;
//     console.log(num);
//   };
//   return (
//     <div>
//       <p>The count is: {num}</p>
//       <button onClick={incrementNum}>Increment</button>
//     </div>
//   );
// }
