import React from "react";
import Picture from "./Picture";
import Status from "./Status";
import Buttons from "./Buttons";

function Welcome() {
  return (
    <div className="container w-fit mx-auto h-full pb-20 flex flex-col items-center">
      <Picture />
      <Status />
      <Buttons />
    </div>
  );
}

export default Welcome;
