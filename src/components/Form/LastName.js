import React from "react";
import { UserIcon } from "@heroicons/react/solid";

function LastName() {
  return (
    <>
      <div className="form__inputs ml-3">
        <label htmlFor="lastName">
          <span>Last name</span>
          <UserIcon className="h-6 w-6 absolute right-4 dark:text-white text-gray-800" />
        </label>
        <input type="text" name="lastName" id="lastName" />
      </div>
    </>
  );
}

export default React.memo(LastName);
