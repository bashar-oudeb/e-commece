import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section className=" mt-2">
    <h1 className=" uppercase font-poppins pl-3 font-bold text-xl ml-20 mb-4 lg:mb-0">Categories products</h1>
    <div className="flex flex-col md:flex-row gap-2 m-2 md:h-[70vh]">
      {/* First column with two images */}
      <div className="flex-1 flex flex-col gap-2">
        {/* First image in the first column */}
        <div className="flex-1 relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/8550900/pexels-photo-8550900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"
            alt=""
            className="w-full h-full object-cover"
          />
          <Link
            to="/products/6"
            className="absolute cursor-pointer bg-white uppercase font-medium text-center rounded-full h-9 min-w-24 w-fit top-0 left-0 right-0 bottom-0 m-auto pt-1"
          >
            Cap
          </Link>
        </div>
        {/* Second image in the first column */}
        <div className="flex-1 relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7357979/pexels-photo-7357979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
          <Link
            to="/products/5"
            className="absolute cursor-pointer bg-white uppercase font-medium text-center rounded-full h-9 min-w-24 w-fit top-0 left-0 right-0 bottom-0 m-auto pt-1"
          >
            Glasses
          </Link>
        </div>
      </div>

      {/* Second column with one image */}
      <div className="flex-2 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/9604185/pexels-photo-9604185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full h-full object-cover"
        />
        <Link
          to="/products/1"
          className="absolute cursor-pointer bg-white uppercase font-medium text-center rounded-full h-9 min-w-24 w-fit top-0 left-0 right-0 bottom-0 m-auto pt-1"
        >
          Men
        </Link>
      </div>

      {/* Third column with three images */}
      <div className="flex-1 flex flex-col gap-2 md:flex-grow">
        {/* First image in the third column */}
        <div className=" flex-1 flex  gap-2 relative overflow-hidden flex-col md:flex-row ">
          <div className="flex-1 flex ">
            <div className="flex-1 flex  relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover"
              />
              <button>
                <Link to="/products/4" className="absolute cursor-pointer bg-white uppercase font-medium text-center rounded-full h-9 min-w-24 w-fit top-0 left-0 right-0 bottom-0 m-auto pt-1">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
          <div className="flex-1 flex ">
            <div className="flex-1 flex  relative overflow-hidden">
              {" "}
              <img
                src="https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover"
              />
              <button>
                <Link to="/products/7" className="absolute cursor-pointer bg-white uppercase font-medium text-center rounded-full h-9 min-w-24 w-fit top-0 left-0 right-0 bottom-0 m-auto pt-1">
                  Kids
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* Third image in the third column */}
        <div className="flex-1 relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
          <Link
            to="/products/3"
            className="absolute cursor-pointer bg-white uppercase font-medium text-center rounded-full h-9 min-w-24 w-fit top-0 left-0 right-0 bottom-0 m-auto pt-1"
          >
            Watch
          </Link>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Category;
