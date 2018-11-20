import React from "react";
// This JS just helps with the display of the container.
const Container = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Container;