import React from "react";
import { Link } from "react-router-dom";

export default function NotFound () {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="max-w-md w-full flex flex-col items-center gap-5 px-6 py-8 bg-white rounded-lg shadow-m">
        <p className="font-bold text-2xl">404 Error</p>
        <p>Resource not found</p>
        <Link
          className="p-2 bg-gray-600 text-white"
          id="backToHomeButton"
          to={"/"}
        >
          Home
        </Link>
      </div>
    </div>
  );
};