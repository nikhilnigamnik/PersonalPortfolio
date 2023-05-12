import React from "react";
import PageLoader from "../components/PageLoader";
import SocialLinks from "../components/social/SocialLinks";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mt-[12rem]">
      <PageLoader />
      <h1 className="font-bold text-center text-[2rem]">Contact Me</h1>
      <div>
        <div className="mt-10 text-center">
          <h1 className="font-bold text-2xl">let's Chat Tell me about your</h1>
          <h1 className="font-bold text-2xl">Project</h1>
          <p className="mt-4">Let's create something together 🤘</p>
        </div>
        <SocialLinks />
        <Link to="mailto:nikhilnigamnik@gmail.com" target="_blank">
          <div className="flex justify-center">
            <Button className="shadow-none hover:shadow-none bg-gray-900 ho mt-10">
              Send Message
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
