import { Tooltip } from "@material-tailwind/react";
import React from "react";

const FrontEnd = () => {
  return (
    <div>
      <div className="flex gap-6 justify-center flex-wrap mt-6">
        <Tooltip content="ReactJs">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        </Tooltip>
        <Tooltip content="Sass">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          />
        </Tooltip>
        <Tooltip content="JavaScript">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
        </Tooltip>

        <Tooltip content="HTML">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
        </Tooltip>

        <Tooltip content="TailwindCSS">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
        </Tooltip>
        <Tooltip content="CSS3">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
        </Tooltip>
        <Tooltip content="MaterialUI">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
          />
        </Tooltip>
       
      </div>
    </div>
  );
};

export default FrontEnd;
