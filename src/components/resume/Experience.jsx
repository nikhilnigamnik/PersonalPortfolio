import { Button } from "@material-tailwind/react";
import React from "react";
import {motion} from 'framer-motion';

const Experience = () => {
  return (
    <div>
      <div className="mt-8">
        <h1 className="font-bold text-[1.8rem]">Experience</h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="border rounded-xl mt-8 bg-white p-8"
      >
        <Button className="bg-gray-900 shadow-none hover:shadow-none ">
          CSRBOX Foundation
        </Button>
        <h1 className="font-bold text-[1.4rem] mt-2">
          Full Stack Developer (Intern)
        </h1>
        <p className="mt-2">
          Worked as a Full Stack Developer for 12 weeks In{" "}
          <strong>CSRBOX Foundation.</strong> Proficient In ReactJS, NodeJS,
          Redux, MongoDB, Tailwind CSS etc. I have worked on some industry level
          projects. I have explored NextJS, Firebase.
        </p>
      </motion.div>
    </div>
  );
};

export default Experience;
