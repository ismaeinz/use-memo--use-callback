// Example 4
import React, { memo, useMemo } from "react";
const Child = ({ count, updateCount }) => {
  console.log("child");
  // after useMemo
  // let output = 0;
  // for (let i = 0; i <= 2000000000; i++) {
  //   output++;
  // }
  // before useMemo
  const output = useMemo(() => {
    let number = 0;
    for (let i = 0; i <= 2000000000; i++) {
      number++;
    }
    return number;
  }, []);
  return (
    <div>
      <h1> Child :</h1>
      {output} - {count}
      <br />
      <button onClick={() => updateCount()}>Update Count</button>
    </div>
  );
};
export default memo(Child);
