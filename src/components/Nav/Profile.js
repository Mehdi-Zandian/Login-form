import React from "react";

function Profile() {
  return (
    <div className="my-3 flex items-center w-fit">
      <div className="bg-fblue-100 rounded-full w-8 h-8 mr-2"></div>
      <span className="dark:text-white md:pr-16 font-semibold">
        Please Login.
      </span>
    </div>
  );
}

export default React.memo(Profile);
