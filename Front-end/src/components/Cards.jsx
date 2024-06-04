import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <section className="w-full sm:w-60 flex flex-col gap-2">
        <div className="w-full h-[330px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden relative">
          {item.attributes.isNew && (
            <span className="absolute top-1 left-1 bg-gray-200 text-gray-800 font-poppins px-2 py-1 rounded z-20">
              New Season
            </span>
          )}
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              item?.attributes?.img.data?.attributes?.url
            }
            alt=""
            className="w-full h-full object-cover z-10 absolute hover:z-0 transition-all duration-300"
          />
          <img
            src={
              import.meta.env.VITE_API_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="w-full h-full object-cover absolute"
          />
        </div>
        <h2 className="px-1 font-medium font-poppins text-gray-800 text-center sm:text-left">
          {item.attributes.title}
        </h2>
        <div className="flex items-center gap-2 px-1 justify-center sm:justify-start">
          <h3 className="line-through text-gray-500">${item.oldPrice}</h3>
          <h3 className="text-sm font-normal font-poppins text-gray-600">
            ${item?.attributes.price}
          </h3>
        </div>
      </section>
    </Link>
  );
};

export default Cards;
