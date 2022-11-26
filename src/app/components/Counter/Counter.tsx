import React, { useState } from 'react';

function Welcome(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <button
      className=" bg-slate-600 text-red-700 p-4 rounded-lg"
      onClick={() => setCount((count) => count + 1)}
    >
      count is: {count}
    </button>
  );
}

export default Welcome;
