import React from "react";
import { AtSymbolIcon } from "@heroicons/react/solid";

function Email() {
  return (
    <>
      <div className="form__inputs col-span-2 my-4">
        <label htmlFor="email">
          <span>Email</span>
          <AtSymbolIcon className="h-6 w-6 absolute right-4 dark:text-white text-gray-800" />
        </label>
        <input
          autoComplete="off"
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
    </>
  );
}

export default React.memo(Email);
