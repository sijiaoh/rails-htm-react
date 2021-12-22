import { raw } from "./raw";

export function RenderNum({ num }) {
  return raw`
    <div>${num}</div>
  `;
}
