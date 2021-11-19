import React from "react";
import useAuth from "../../hooks/useAuth";

const Logout = () => {
  const {
    logout,
    user: {
      userInfo: { name, email,isAdmin },
    },
  } = useAuth();

  return (
    <div className="flex justify-center items-center flex-col h-32 p-40">
      <h1 className="text-2xl font-semibold text-gray-900 mb-5">{name}</h1>
      <h1 className="text-lg font-semibold text-gray-900 mb-5">{email}</h1>
      <h1 className="text-lg font-semibold text-gray-900 mb-10">User Type: {isAdmin?'Admin':'User'}</h1>
      <div
        onClick={logout}
        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
      >
        log Out
      </div>
    </div>
  );
};

export default Logout;
