import React from "react";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between">
        <h1 className="text-2xl">Denali</h1>
        <ul className="flex justify-between">
          <li className="cursor-pointer ">
            Home
          </li>
          <li className="text-grayd cursor-pointer px-9">
            About
          </li>
          <li className="text-grayd cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
