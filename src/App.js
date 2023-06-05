import React, { useState } from "react";
import Child from "./components/Child";
import { useCallback } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("");

  const updateCount = useCallback(() => {
    setCount(count + 1);
  }, []);
  return (
    <div>
      {count}
      <hr />
      <button onClick={() => setCount(count + 1)}> Add One</button>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      {/* rerender After plus */}
      <Child count={count} updateCount={updateCount} />
    </div>
  );
};
export default App;
