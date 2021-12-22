import { useState } from "react";
import { raw } from "./raw";
import { RenderNum } from "./RenderNum";

export function Counter() {
  const [num, setNum] = useState(0);

  return raw`
    <div>
      <button onClick=${() => setNum(num + 1)}>+</button>
      <${RenderNum} num=${num} />
    </div>
  `;
}
