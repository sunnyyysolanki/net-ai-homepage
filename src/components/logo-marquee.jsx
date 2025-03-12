import React from "react";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-3xl ">
        <Marquee className="text-2xl font-boldflex gap-6">
          <p className="m-4">
            <span className="text-blue-400 m-2">NET</span>
            <span className="text-green-300">AI</span>{" "}
          </p>
          <p className="m-4">
            <span className="text-blue-400 m-2">NET</span>
            <span className="text-green-300">AI</span>{" "}
          </p>
          <p className="m-4">
            <span className="text-blue-400 m-2">NET</span>
            <span className="text-green-300">AI</span>{" "}
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LogoMarquee;
