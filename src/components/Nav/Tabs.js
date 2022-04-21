import React from "react";
import { useDispatch } from "react-redux";
import { changeMode } from "../../app/features/mode/modeSlice";

function Tabs() {
  // redux
  const dispatch = useDispatch();
  return (
    <div className="flex-1 text-gray-500 font-semibold text-sm">
      <span className="cursor-pointer px-5 mr-5">Home</span>
      <span className="cursor-pointer px-5">Join</span>
      <span
        onClick={() => dispatch(changeMode())}
        className="cursor-pointer px-5"
      >
        dark mode btn
      </span>
    </div>
  );
}

export default React.memo(Tabs);
