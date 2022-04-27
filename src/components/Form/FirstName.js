import React from "react";
import { UserIcon } from "@heroicons/react/solid";

function FirstName() {
  return (
    <>
      <div className="form__inputs mr-3">
        <label htmlFor="firstName">
          <span>First name</span>
          <UserIcon className="h-6 w-6 absolute right-4 dark:text-white text-gray-800" />
        </label>
        <input type="text" name="firstName" id="firstName" />
      </div>
    </>
  );
}

export default React.memo(FirstName);
