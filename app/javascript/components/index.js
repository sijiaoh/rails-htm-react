import { render } from "react-dom";
import { raw } from "./raw";
import { Counter } from "./Counter";

render(
  raw`
    <h1>hello world</h1>
    <${Counter} />
  `,
  document.getElementById("root")
);
