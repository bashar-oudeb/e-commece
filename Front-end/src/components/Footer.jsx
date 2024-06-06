import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24 mt-7">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2  gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12  ">
          <div>
            <p className="text-base text-gray-500">Company</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className=" text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  About{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Features{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Works{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Career{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-500">Help</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-500">Resources</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Free eBooks{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Development Tutorial{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  How to - Blog{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  YouTube Playlist{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-base text-gray-500">Extra Links</p>

            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Customer Support{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Delivery Details{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base text-gray-300 transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap flex-col md:flex-row gap-1 items-center justify-between">
          <h1 className=" font-bold text-xl md:text-1xl h-8 auto md:order-1 text-gray-200">
            E-STORE
          </h1>

          <div className="flex items-center space-x-3 md:order-3">
            <img src="/img/payment.png" className="w-[12rem] md:w-[15rem] " alt="" />
          </div>

          <p className="w-full mt-4  text-sm text-center text-gray-200 md:mt-0 md:w-auto md:order-2">
            © Copyright 2021, All Rights Reserved by Postcraft
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
