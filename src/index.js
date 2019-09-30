import { hot } from "react-hot-loader/root";
import ReactDOM from "react-dom";
import React from "react";

const render = () => {
  ReactDOM.render(
    <div>this is my react app</div>,
    document.getElementById("app")
  );
};

console.log("working");
//render();
hot(render());
