import { Button } from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { useState } from "react";

const cardsData = [
  {
    id: 1,
    title: "Gif Generator",
    description:
      "A gif generator reactJs application where you can find any type of gif by searching functionality",
    imageUrl:
      "https://res.cloudinary.com/dtmp7op6k/image/upload/v1684322711/Screenshot_5_wpzjki.png",
    link: "https://gifgenerator.vercel.app/",
  },
  {
    id: 2,
    title: "Food Delivery App",
    description:
      "It helps users create stronger passwords that provide greater security for a given type of access.",
    imageUrl:
      "https://res.cloudinary.com/dtmp7op6k/image/upload/v1685515265/Screenshot_2023-05-31_120958_g1doo7.png",
    link: "https://insta-mart.vercel.app/",
  },
  {
    id: 3,
    title: "Notes Application",
    description:
      "It helps users create stronger passwords that provide greater security for a given type of access.",
    imageUrl:
      "https://res.cloudinary.com/dtmp7op6k/image/upload/v1685551130/Screenshot_2023-05-31_220437_etqkiy.png",
    link: "https://takeyournote.vercel.app/",
  },
  {
    id: 4,
    title: "FoodWaala",
    description:
      "It helps users create stronger passwords that provide greater security for a given type of access.",
    imageUrl:
      "https://res.cloudinary.com/dtmp7op6k/image/upload/v1687207580/Screenshot_2023-06-20_021507_hqvxm5.png",
    link: "https://foodwaale.vercel.app/",
  },
];

const CardPro = ({ imageUrl, title, description, link, id }) => {
  const [showText, setShowText] = useState(false);

  return (
    <Link to={link} target="_blank">
      <div
        key={id}
        className="relative p-8 max-w-sm mx-auto overflow-hidden rounded-[12px] shadow-lg"
      >
        <img
          className={`object-cover rounded-[6px] w-full transition duration-500 ease-in-out ${
            showText ? "blur-md" : ""
          }`}
          src={imageUrl}
          alt="Card image"
          loading="lazy"
        />
        <div
          className={`${
            showText ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white`}
        >
          <p className="text-2xl text-black font-bold mb-2 animate-fadeIn">
            {title}
          </p>
          <Button className="bg-gray-900 shadow-none hover:shadow-none ">
            See Live
          </Button>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        ></div>
      </div>
    </Link>
  );
};

const ProjectCard = () => (
  <div className="grid mt-10 sm:grid-cols-1  gap-6 xl:grid-cols-2 card">
    {cardsData.map((card) => (
      <CardPro key={card.id} {...card} />
    ))}
  </div>
);

export default ProjectCard;
