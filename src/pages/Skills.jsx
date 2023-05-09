import React from "react";
import Education from "../components/resume/Education";
import Certificate from "../components/resume/Certificate";
import Experience from "../components/resume/Experience";
import SkillsList from "../components/resume/SkillsList";
import PageLoader from "../components/PageLoader";

const Skills = () => {
  return (
    <div className="mt-[12rem]">
    <PageLoader/>
      <div>
        <h1 className="font-bold text-center text-[2rem]">My Resume</h1>
      </div>
      <Education />
      <Certificate />
      <Experience />
      <SkillsList />
    </div>
  );
};

export default Skills;
