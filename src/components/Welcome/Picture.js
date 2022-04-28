import React from "react";
import Avatar from "../../assets/avatar.jpeg";
import { useSelector } from "react-redux";

function Picture() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="bg-re-300 mt-12 h-fit flex flex-col">
      <h1 className="text-center dark:text-gray-400 text-gray-600 text-2xl font-bold">
        Welcome to your Profile !
      </h1>
      <div className="mt-16 flex flex-col md:flex-row items-center">
        <img
          className="w-40 md:w-48 mb-6 md:mb-0 md:mr-10 rounded-full shadow-lg"
          src={Avatar}
          alt="avatar"
        />
        <div>
          <div className="flex flex-col md:items-start items-center">
            <h3 className="md:text-3xl text-xl font-bold dark:text-white">
              {user?.firstName} {user?.lastName}
            </h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {user?.email}
            </span>
            <span className="text-green-600 text-base md:text-lg font-semibold">
              Online
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Picture);
