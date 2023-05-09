import { Button } from "@material-tailwind/react";
import React from "react";
import course from "../resume/coursera.png";
import free from "../resume/free.png";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    title: "Coursera",
    description: "Programming With JavaScript",
    imageUrl: course,
    link: "https://coursera.org/share/1026fa6aaa5871ebd96de4c92d0edc55",
  },
  {
    id: 2,
    title: "freeCodeCamp",
    description: "JavaScript Algorithms and Data Structures",
    imageUrl: free,
    link: "https://freecodecamp.org/certification/nikhilnigamnik/javascript-algorithms-and-data-structures",
  },
];

const CardPro = ({ id, title, description,link, imageUrl }) => (
  <div
    key={id}
    className="bg-white flex border justify-between flex-col rounded-xl mt-10 p-8"
  >
    <div className="flex cursor-pointer items-center gap-4 ">
      <img
        className="bg-[#F6F8FB] hover:shadow-inner p-3 border w-[3rem] rounded-xl"
        src={imageUrl}
      />
      <p className="bg-[#F6F8FB] hover:shadow-inner border px-8 py-3 rounded-xl">
        {title}
      </p>
    </div>
    <h1 className="font-bold text-[1.4rem] mt-2">{description}</h1>
    <Link to={link} target="_blank">
      <Button className="bg-gray-900  mt-2 shadow-none hover:shadow-none ">
        View Certificate
      </Button>
    </Link>
  </div>
);

const ProjectCard = () => (
  <div className="  mt-10">
    <h1 className="font-bold text-[1.8rem]">Certificates</h1>
    <div className="grid  gap-6 grid-cols-2 card">
      {cardsData.map((card) => (
        <CardPro key={card.id} {...card} />
      ))}
    </div>
  </div>
);

export default ProjectCard;
