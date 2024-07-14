import React from "react";
import logo from "../assets/Ellipse 54.png";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

function Aside() {
  return (
    <>
      <aside className="w-80 h-100 bg-white border-[1px] border-solid border-grays rounded px-5 py-5 flex flex-col justify-start items-center mx">
        <img src={logo} alt="" className="" />
        <p className="mt-2 font-medium">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          impedit.
        </p>
        <hr className="w-1/2 mt-2 border-t border-grays flex self-start" />
        <p className="mt-2 font-medium self-start">Featured Posts:</p>
        <p className="mt-2 text-grayd font-medium">
          Lorem ipsum dolor, sit amet{" "}
        </p>
        <p className="mt-2 text-grayd font-medium">
          Lorem ipsum dolor, sit amet{" "}
        </p>
        <hr className="w-1/2 mt-2 border-t border-grays flex self-start" />
        <div className="flex justify-between self-start mt-5">
          <img src={linkedin} alt="" className="pr-2 cursor-pointer" />
          <img src={instagram} alt="" className="px-2 cursor-pointer" />
          <img src={facebook} alt="" className="px-2 cursor-pointer" />
          <img src={twitter} alt="" className="pl-2 cursor-pointer" />
        </div>
        <p className="mt-4 text-xs font-bold self-start text-grayd">
          BUILT WITH AMUMU
        </p>
      </aside>
    </>
  );
}

export default Aside;
