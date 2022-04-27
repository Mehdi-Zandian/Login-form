import React from "react";
import { EyeIcon } from "@heroicons/react/solid";

function Password() {
  return (
    <>
      <div className="form__inputs col-span-2">
        <label htmlFor="password">
          <span>Password</span>
          <EyeIcon className="h-6 w-6 absolute right-4 dark:text-white text-gray-800" />
        </label>
        <input
          autoComplete="off"
          type="password"
          name="password"
          id="password"
          required
        />
      </div>
    </>
  );
}

export default React.memo(Password);
