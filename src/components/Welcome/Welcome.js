import React from "react";
import Picture from "./Picture";
import Status from "./Status";

function Welcome() {
  return (
    <div className="container mx-auto h-screen flex flex-col items-center">
      <Picture />
      <Status />
    </div>
  );
}

export default Welcome;
