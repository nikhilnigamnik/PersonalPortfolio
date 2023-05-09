import first from "../assets/emoOne.webp";
import second from "../assets/emoTwo.webp";
import third from "../assets/emoThree.webp";
import four from "../assets/emoFour.webp";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex justify-center ">
      <div className="move-down backdrop-blur-md max-w-4xl  border  w-11/12 sm:w-3/4 md:w-3/5 lg:w-[30%] mt-12 flex justify-between items-center px-4 py-4 rounded-full  z-10 fixed">
        <Link to="/">
          <div className="w-[4rem] border rounded-full p-2">
            <img src={first} />
          </div>
        </Link>

        <Link to="resume">
          <div className="w-[4rem] border rounded-full p-2">
            <img src={second} />
          </div>
        </Link>
        <Link to="work">
          <div className="w-[4rem] border rounded-full p-2">
            <img src={third} />
          </div>
        </Link>
        <Link to="contact">
          <div className="w-[4rem] border rounded-full p-2">
            <img src={four} />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
