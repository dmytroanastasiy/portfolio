import { useState } from "react";

// A minimal example of a real client-side library component — this is
// the direct fix for "no client side library included." Swap this out
// for something real, e.g. a rebuilt version of your old floating-skills
// animation as a proper React component instead of a hand-rolled JS class.
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Interactive React island — clicked {count} times
    </button>
  );
}
