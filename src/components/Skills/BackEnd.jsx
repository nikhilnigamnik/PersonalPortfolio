import { Tooltip } from "@material-tailwind/react";
import React from "react";

const BackEnd = () => {
  return (
    <div>
      <div className="flex gap-6 justify-center flex-wrap mt-6">
        <Tooltip content="NodeJs">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
        </Tooltip>
        <Tooltip content="MongoDB">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
        </Tooltip>
        <Tooltip content="ExpressJs">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default BackEnd;
