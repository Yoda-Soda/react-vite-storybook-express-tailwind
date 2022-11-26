import React, { useEffect, useState } from 'react';
import classes from './Welcome.module.css';

function Welcome(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
  );
}

export default Welcome;
