import React from "react";
import { motion } from "framer-motion";
import PageLoader from "./pageLoader/PageLoader";
import cart from "../assets/cart.jpg";
import blog from "../assets/blog.jpg";
import gif from "../assets/gif.jpg";

const list = [
  {
    title: "Blog Application",
    image: blog,
    link: "https://codepoly.vercel.app/",
    desc: "Blog Application where you can find any types of blog",
  },
  {
    title: "Shopping Cart",
    link: "https://shopping-cart-funs.vercel.app/",
    image: cart,
    desc: "You can add product in cart and you can delete items ",
  },
  {
    title: "Gif Generator",
    link: "https://gifgenerator.vercel.app/",
    image: gif,
    desc: "You can add product in cart and you can delete items",
  },
];

const Work = () => {
  return (
    <div className="mt-[10rem] mb-10">
      <PageLoader />
      <div>
        <h1 id="work" className="font-bold text-[2rem]">
          My Work
        </h1>
        <p className="text-[15px]">
          I've been busy past few years, working on some of the best projects.
          Here's a Glimpse!
        </p>
      </div>
      <div className="flex items-center justify-center mt-10 work">
        {list.map((item, index) => (
          <div
            className="flex flex-col gap-3 rounded-[10px] p-4 m-3 bg-[#f9f9f9]"
            key={index}
          >
            <img className="w-[100%] rounded-[10px]" src={item.image} />
            <div className="p-2">
              <h1 className="font-bold text-xl ">{item.title}</h1>
              <p className="mt-3">{item.desc}</p>
            </div>
            <a href={item.link}>
              <button className="bg-black hover:bg-white transition-all hover:border hover:text-black text-white rounded py-2 px-4">
                View Project 👉
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
