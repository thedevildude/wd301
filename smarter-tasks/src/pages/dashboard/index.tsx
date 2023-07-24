import React from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "");
  console.log(userData.name);
  console.log(userData.email);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        User details
      </h2>
      <p id="name" className="text-xl">
        {JSON.parse(localStorage.getItem("userData") || "").name}
      </p>
      <p id="email" className="text-xl">
        {JSON.parse(localStorage.getItem("userData") || "").email}
      </p>
      <Link
        to={"/logout"}
        id="logout-link"
        className="text-xl p-2 bg-blue-300 rounded-md text-white"
      >
        Logout
      </Link>
    </div>
  );
};

export default Dashboard;
