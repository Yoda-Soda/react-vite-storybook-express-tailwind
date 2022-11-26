import React, { useState } from 'react';

function Welcome(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
  );
}

export default Welcome;
