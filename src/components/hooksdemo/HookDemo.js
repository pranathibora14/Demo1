import React, { useEffect, useState } from "react";

const HookDemo = (props) => {
  const [count, setCount] = useState(props.count);

  useEffect(() => {
    console.log("getting called");
  });
  return (
    <p>
      The current count is: {count}
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </p>
  );
};
export default HookDemo;
HookDemo.defaultProps = {
  count: 0
};
