import React from "react";
import head from "../assets/logo.jpg";

import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
// import PageLoader from "./pageLoader/PageLoader";

const Header = () => {
  return (
    <div className="grid gap-8 justify-items-center header items-center mt-[12rem] mb-10 sm:grid-cols-2">
      {/* <PageLoader/> */}
      <div className="flex gap-7 flex-col">
        <div>
          <p>
            Hello there <span> 👋</span>
          </p>
        </div>
        <div>
          <h1 className="text-[1.9rem] font-bold tracking-[1px]">
            My name is Nikhil Nigam, and I’m a Web Designer with a Strong Sense
            of Humor and Creative Expertise!
          </h1>
        </div>
        <div>
          <p className="text-[#00000083] ">
            I'm a passionate web designer with years of experience in creating
            clean, user-friendly designs. I'm committed to delivering
            high-quality work that meets the unique needs of each client. Let's
            work together to bring your vision to life in no time.
          </p>
        </div>

        <div className="flex gap-6 float-right">
          <Button className="transition-all bg-gray-900 shadow-none hover:shadow-none">
            My story 👉
          </Button>
          <Link to="/work">
            <Button className="bg-gray-900 shadow-none hover:shadow-none">See Work 👉</Button>
          </Link>
        </div>
      </div>
      <img
        className="w-[80%] logo hover:transform transition-all rounded-[10px]  hover:-rotate-2 "
        src={head}
      />
    </div>
  );
};

export default Header;
