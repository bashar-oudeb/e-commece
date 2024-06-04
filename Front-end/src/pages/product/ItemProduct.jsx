import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const ItemProduct = () => {
  const id = useParams().id;
  const [selectImg, setSelectImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <section className="py-5 px-4 md:px-12 flex flex-col lg:flex-row gap-6 md:gap-12 mt-6">
    {loading ? (
      "loading"
    ) : (
      <>
        <div className="flex-1 flex flex-row md:flex-row gap-5">
          <div className="flex-1 flex  flex-col gap-2">
            <img
              src={
                import.meta.env.VITE_API_UPLOAD_URL +
                data?.attributes?.img?.data?.attributes?.url
              }
              alt=""
              onClick={() => setSelectImg("img")}
              className="w-full h-12 md:h-48 object-cover cursor-pointer mb-2"
            />
            <img
              src={
                import.meta.env.VITE_API_UPLOAD_URL +
                data?.attributes?.img2?.data?.attributes?.url
              }
              alt=""
              onClick={() => setSelectImg("img2")}
              className="w-full h-12 md:h-48 object-cover cursor-pointer mb-2"
            />
          </div>
          <div className="flex-[5]">
            <img
              src={
                import.meta.env.VITE_API_UPLOAD_URL +
                data?.attributes[selectImg]?.data?.attributes?.url
              }
              alt=""
              className="w-full max-h-[400px] md:max-h-[600px] object-contain"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-lg md:text-xl lg:text-2xl">{data?.attributes?.title}</h1>
          <span className="font-bold text-gray-500 text-lg md:text-xl lg:text-2xl">
            ${data?.attributes?.price}
          </span>
          <p className="text-justify font-normal text-gray-800 text-sm md:text-base lg:text-lg">
            {data?.attributes?.desc}
          </p>
          <div className="flex gap-3 items-center">
            <button
              className="w-9 h-9 border-none bg-slate-200"
              onClick={() =>
                setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
              }
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="w-9 h-9 border-none bg-slate-200"
            >
              +
            </button>
          </div>
          <button
            className="w-52 p-2 bg-cyan-600 text-white flex justify-center items-center gap-4 cursor-pointer border-none text-sm md:text-base"
            onClick={() => dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img: data.attributes.img.data.attributes.url,
              quantity,
            }))}
          >
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm md:text-base">
              <FavoriteBorderIcon /> ADD TO WISH LIST
            </div>
            <div className="flex items-center gap-2 text-sm md:text-base">
              <BalanceIcon /> ADD TO COMPARE
            </div>
          </div>
          <div className="flex flex-col gap-4 text-sm md:text-base mt-5">
            <span>Vendor: Polo</span>
            <span>Product Type: T-Shirt</span>
            <span>Tag: T-Shirt, Women, Top</span>
          </div>
          <hr className="w-full border border-gray-300" />
          <div className="flex flex-col gap-4 text-sm md:text-base mt-5">
            <span>DESCRIPTION</span>
            <hr className="w-full border border-gray-300" />
            <span>ADDITIONAL INFORMATION</span>
            <hr className="w-full border border-gray-300" />
            <span>FAQ</span>
          </div>
        </div>
      </>
    )}
  </section>
  
  );
};

export default ItemProduct;
