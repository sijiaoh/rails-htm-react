import { render } from "react-dom";
import { h } from "./h";
import { Counter } from "./Counter";

render(
  h`
    <h1>hello world</h1>
    <${Counter} />
  `,
  document.getElementById("root")
);
