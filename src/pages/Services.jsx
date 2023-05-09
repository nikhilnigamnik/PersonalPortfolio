import { Button } from "@material-tailwind/react";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import Accodion from "../components/Accordion";
import PageLoader from "../components/PageLoader";


const Services = () => {
  return (
    <div className="mt-[12rem] mb-20">
  <PageLoader/>
      <div>
        <h1 className="font-bold text-center text-[2rem]">My Work</h1>

        <p className="text-[15px] mt-4">
          I've been busy past few years, working on some of the best projects.
          Here's a Glimpse!
        </p>
        <Accodion />
        <Button className="bg-gray-900 shadow-none hover:shadow-none mt-8">
          Get Started 👉
        </Button>
      </div>
      <div className="mt-8">
        <h1 className="font-bold text-[2rem]">My Project</h1>

        <ProjectCard />
      </div>
    </div>
  );
};

export default Services;
