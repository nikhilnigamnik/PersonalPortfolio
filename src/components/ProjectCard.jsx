import cart from "../assets/project/cart.webp";
import blog from "../assets/project/blog.webp";
import gif from "../assets/project/gif.webp";
import pass from "../assets/project/pass.jpg";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const cardsData = [
  {
    id: 1,
    title: "Shopping Cart",
    description: "Where you can add and remove product from cart",
    imageUrl: cart,
    link: "https://shopping-cart-funs.vercel.app/",
  },
  {
    id: 2,
    title: "Blog Application",
    description:
      "A fully functionaly blog application here you can see technology related blogs",
    imageUrl: blog,
    link: "https://codepoly.vercel.app/",
  },
  {
    id: 3,
    title: "Gif Generator",
    description:
      "A gif generator reactJs application where you can find any type of gif by searching functionality",
    imageUrl: gif,
    link: "https://gifgenerator.vercel.app/",
  },
  {
    id: 4,
    title: "Password Generator",
    description:
      "It helps users create stronger passwords that provide greater security for a given type of access.",
    imageUrl: pass,
    link: "https://passgenerator-two.vercel.app/",
  },
];

const CardPro = ({ id, title, description, link, imageUrl }) => (
  <div key={id} className="card">
    <Card className="bg-white mt-10">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img src={imageUrl} className="w-full h-full object-cover" />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between mb-2">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </Typography>
      </CardBody>

      <div className="flex m-4 items-center">
        <Link to={link} target="_blank">
          <Button className="bg-gray-900 mr-5 shadow-current hover:shadow-current">
            See Live
          </Button>
        </Link>
        <IconButton className="bg-gray-900  shadow-none hover:shadow-none text-white  p-5 rounded-[8px]">
          <AiFillGithub />
        </IconButton>
      </div>
    </Card>
  </div>
);

const ProjectCard = () => (
  <div className="grid sm:grid-cols-1  gap-6 xl:grid-cols-2 card">
    {cardsData.map((card) => (
      <CardPro key={card.id} {...card} />
    ))}
  </div>
);

export default ProjectCard;
