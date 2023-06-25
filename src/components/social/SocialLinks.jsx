import React from "react";
import face from "../social/face.svg";
import insta from "../social/insta.svg";
import link from "../social/link.svg";
import pin from "../social/pin.svg";
import git from "../social/git.svg";
import twitter from "../social/twitter.svg";
import { Link } from "react-router-dom";

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-8 justify-center">
      <Link to="https://www.facebook.com/nikhil.nigam.589" target="_blank">
        <img
          className="rounded-full w-[4rem] border p-2 bg-white hover:shadow-inner"
          src={face}
        />
      </Link>
      <Link to="https://instagram.com/nikhil_nigam_nik?igshid=YmMyMTA2M2Y=" target="_blank">
        <img
          className="rounded-full w-[4rem] border p-2 bg-white hover:shadow-inner"
          src={insta}
        />
      </Link>
      <Link to="https://www.linkedin.com/in/nikhil-nigam-a2454b1a9" target="_blank">
        <img
          className="rounded-full w-[4rem] border p-2 bg-white hover:shadow-inner"
          src={link}
        />
      </Link>
      <Link to="https://pin.it/3JNPJMa" target="_blank">
        <img
          className="rounded-full w-[4rem] border p-2 bg-white hover:shadow-inner"
          src={pin}
        />
      </Link>
      <Link to="https://github.com/nikhilnigamnik" target="_blank">
        <img
          className="rounded-full w-[4rem] border p-2 bg-white hover:shadow-inner"
          src={git}
        />
      </Link>
      <Link to="https://twitter.com/nikhil_nigamnik?t=PXEaUcHzPeJ3hcdpcYMwMA&s=35" target="_blank" >
        <img
          className="rounded-full w-[4rem] border p-2 bg-white hover:shadow-inner"
          src={twitter}
        />
      </Link>
    </div>
  );
};

export default SocialLinks;
