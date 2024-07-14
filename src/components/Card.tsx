import React from "react";
import CardImage from "../assets/Frame 481799.png";

function Card() {
  return (
    <>
      <div className="bg-white border-[1px] border-solid border-grays rounded py-6 px-6 flex mb-4">
        <img src={CardImage} alt="" className="h-40 w-40 rounded" />
        <div className="flex flex-col justify-start ml-4">
          <h1 className="text-2xl font-medium">Lorem ipsum dolor sit amet.</h1>
          <div className="flex justify-start items-center">
            <p className="text-grayd">MARCH 17, 2016</p>
            <div className="w-px h-4 my-2 bg-grayd mx-4"></div>
            <p className="text-grayd">MUSIC</p>
          </div>
          <p className="text-red-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            suscipit, nihil ea iste quibusdam maxime distinctio ab neque.{" "}
            <span className="underline text-grayd cursor-pointer pl-2">
              Read More...
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
