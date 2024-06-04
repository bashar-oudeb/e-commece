import { useDispatch, useSelector } from "react-redux";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { removeItem, resetCart } from "../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));

    return total.toFixed(2);
  };

  
  return (
    <section className=" absolute right-0 top-[52px] z-10 bg-white p-5 shadow">
      <h1 className=" mb-7 text-gray-900 font-medium text-2xl">
        Product in your cart
      </h1>
      {products.map((item) => (
        <div className=" flex items-center gap-5 mb-7" key={item.id}>
          <img
            src={import.meta.env.VITE_API_UPLOAD_URL + item.img}
            alt=""
            className=" w-20 h-24 object-cover"
          />
          <div className="">
            <h2 className=" text-lg font-medium">{item.title}</h2>
            <p className=" text-gray-700 mb-2 text-sm">
              {" "}
              {item.des
                ? item.des.substring(0, 50)
                : "No description available"}
            </p>
            <div className=" text-cyan-600">
              {" "}
              {item.quantity} * {item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className=" text-red-800 cursor-pointer text-3xl"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="flex justify-between px-1 font-medium text-lg mb-3">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className=" w-[250px] p-2 flex items-center justify-center gap-4 cursor-pointer border-none bg-black text-white font-medium mb-3" >
        PROCEED TO CHECKOUT
      </button>
      <span
        className=" text-red-800 text-sm cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </section>
  );
};

export default Cart;
