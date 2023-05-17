import React, { useState } from "react";

export function Cexxx() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="relative max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg">
      <img
        className={`object-cover w-full h-64 transition duration-500 ease-in-out transform ${
          showText ? "scale-110" : "scale-100"
        }`}
        src="https://picsum.photos/seed/picsum/200/300"
        alt="Card image"
      />
      <div
        className={`${
          showText ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white`}
      >
        <p className="text-2xl font-bold mb-2 animate-fadeIn">Card Text</p>
        <a href="#" className="underline animate-fadeIn delay-200">
          Learn More
        </a>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      ></div>
    </div>
  );
}

