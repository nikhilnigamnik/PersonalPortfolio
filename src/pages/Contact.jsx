import React, { useEffect } from "react";
import PageLoader from "../components/PageLoader";

import { ContactUs } from "../components/ContactNew";

const Contact = () => {
  const TitleName = "Portfolio | Contact";
  useEffect(() => {
    document.title = TitleName ;

  },[TitleName]);
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

        <ContactUs />
      </div>
    </div>
  );
};

export default Contact;
