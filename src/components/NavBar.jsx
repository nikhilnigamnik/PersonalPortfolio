import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="flex justify-center ">
      <div className="move-down backdrop-blur-md max-w-4xl  border  w-11/12 sm:w-3/4 md:w-3/5 lg:w-[30%] mt-12 flex justify-between items-center px-4 py-4 rounded-full  z-10 fixed">
        <Link to="/">
          <div className="w-[4rem] border rounded-full p-2">
            <img src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1684322784/emoOne_vlscdn.webp" />
          </div>
        </Link>

        <Link to="resume">
          <div className="w-[4rem] border rounded-full p-2">
            <img src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1684322784/emoTwo_toq9vu.webp" />
          </div>
        </Link>
        <Link to="work">
          <div className="w-[4rem] border rounded-full p-2">
            <img src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1684322785/emoThree_ck6cru.webp" />
          </div>
        </Link>
        <Link to="contact">
          <div className="w-[4rem] border rounded-full p-2">
            <img src="https://res.cloudinary.com/dtmp7op6k/image/upload/v1684322784/emoFour_jbtnyl.webp" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
