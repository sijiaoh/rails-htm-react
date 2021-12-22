import { useState } from "react";
import { h } from "./h";

export function Counter() {
  const [num, setNum] = useState(0);

  return h`
    <div>
      <button onClick=${() => setNum(num + 1)}>+</button>
      ${num}
    </div>
  `;
}
