import { Button } from "@material-tailwind/react";
import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="font-bold text-[1.8rem]">Experience</h1>
      </div>
      <div className="border rounded-xl mt-8 bg-white p-8">
        <Button className="bg-gray-900 shadow-none hover:shadow-none ">CSRBOX Foundation</Button>
        <h1 className="font-bold text-[1.4rem] mt-2">Full Stack Developer (Intern)</h1>
        <p className="mt-2">
          Worked as a Full Stack Developer for 12 weeks In <strong>CSRBOX Foundation.</strong>  Proficient In
          ReactJS, NodeJS, Redux, MongoDB, Tailwind CSS etc. I have worked on
          some industry level projects. I have explored NextJS, Firebase.
        </p>
      </div>
    </div>
  );
};

export default Experience;
