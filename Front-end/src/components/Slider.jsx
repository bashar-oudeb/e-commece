import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <section className=" overflow-hidden relative">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
        <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
          <div className="absolute bottom-0 right-0 hidden lg:block">
            <img
              className="object-contain w-auto h-48"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
              alt=""
            />
          </div>

          <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
            <h1 className="text-4xl font-bold   md:text-5xl sm:text-6xl xl:text-8xl font-poppins">
              Your Favorite Products,
              <br />
              All in One Place
            </h1>
            <p className="mt-8 text-xl md:text-base  text-gray-900">
              E-Store brings you exclusive deals on top-quality products.
              Shop with confidence knowing you're getting the best in both
              selection and service.
            </p>

            <p className="mt-5 text-base text-gray-800">
             Free shipping
            </p>
          </div>

          <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
            <img
              className="w-32 h-32 md:w-40 md:h-40"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
              alt=""
            />
          </div>
        </div>

        <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
          <div className="absolute inset-0">
            <img
              className="object-cover w-full h-full "
              src="https://images.pexels.com/photos/17775896/pexels-photo-17775896/free-photo-of-young-man-in-an-elegant-trendy-outfit-sitting-on-a-sofa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          <div className="absolute bottom-0 left-0">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center">
                <svg
                  className="w-10 h-10 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
              </div>
              <p className="max-w-xs mt-1.5 text-xl text-white">
                Professionals have organized their desk via PostCra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
