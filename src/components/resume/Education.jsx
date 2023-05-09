import { Button } from "@material-tailwind/react";
import React from "react";

const Education = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="font-bold text-[1.8rem]">Education</h1>
      </div>
      <div className="border rounded-xl mt-8 bg-white p-8">
        <Button className="bg-gray-900  shadow-none hover:shadow-none">2020 - 2024</Button>
        <h1 className="font-bold text-[1.4rem] mt-2">
          Bachelor of Engineering
        </h1>
        <p className="mt-2">Marwadi University</p>
      </div>
    </div>
  );
};

export default Education;
