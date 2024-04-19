import react from "react";
import { createRoot } from "react-dom/client";

const element = react.createElement("p", { id: "hello" }, "hello world");
export default function App() {
  return <h1 id="hello">hello world</h1>;
}
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(element);
console.log(element);
import react from "react";
import { createRoot } from "react-dom/client";
const element = react.createElement("p", {id:"hello" },"helloworld");
export default function App()
{
  return <h1 id="hello">helloworld</h1>
}
const container = document.querySelector("#root");
const root =createRoot(container);
root.render(element);

