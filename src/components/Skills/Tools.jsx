import { Tooltip } from "@material-tailwind/react";
import React from "react";

const Tools = () => {
  return (
    <div>
      <div className="flex gap-6 justify-center flex-wrap mt-6">
        <Tooltip content="VsCode">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
        </Tooltip>
        <Tooltip content="Redux">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
          />
        </Tooltip>

        <Tooltip content="npm">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
          />
        </Tooltip>

        <Tooltip content="Figma">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          />
        </Tooltip>

        <Tooltip content="Canva">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
          />
        </Tooltip>

        <Tooltip content="Github">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </Tooltip>

        <Tooltip content="Git">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
        </Tooltip>

        <Tooltip content="Photoshop">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
          />
        </Tooltip>

        <Tooltip content="Framer Motion">
          <img
            width={100}
            className="rounded-full p-4 border"
            src="https://logosandtypes.com/wp-content/uploads/2021/04/framer-motion.svg"
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Tools;
