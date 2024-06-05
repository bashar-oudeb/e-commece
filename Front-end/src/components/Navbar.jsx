import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from '@mui/icons-material/Menu';
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (


    <section className=" flex items-center justify-between  p-2 my-1  md:mx-3 font-poppins">

      <div className="LEFT flex items-center gap-3 ">
        <div className="hidden md:flex items-center gap-4 ">
          <NavLink to='/products/1'>Men</NavLink>
          <NavLink to='/products/3'>Watch</NavLink>
          <NavLink to='/products/4'>Shoes</NavLink>
          <NavLink to='/products/7'>Kids</NavLink>
          <NavLink to='/products/5'>Glasses</NavLink>
        </div>
      </div>

      <div className="CENTER text-xl font-bold mr-16 sm:mr-96 md:mr-0">
        <h1>
          <NavLink to="/">E-STORE</NavLink>
        </h1>
      </div>

      <div className="RIGHT flex items-center gap-4">
        <div className="hidden md:flex  gap-3">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>
        
        <div className="ICON flex items-center gap-2 cursor-pointer text-gray-600 m sm:mr-6 sm:gap-2">
          <SearchIcon />
          <NavLink to={'/login'}> <PersonIcon  /> </NavLink>
          <FavoriteIcon />
          <div className=" relative" onClick={() => setOpen(!open)}>
            <LocalGroceryStoreIcon />
            <span className=" h-5 w-5 bg-teal-500 text-sm text-white rounded-[50%] absolute bottom-3 left-3 text-center ">
              {products.length}
            </span>
          </div>
          <div className="md:hidden   " onClick={()=> setToggle(!toggle)}>
            <MenuIcon className="  text-gray-950 "/>
          </div>
        </div>
      </div>
      {open && <Cart />}
      {toggle && (
        <div className="absolute z-20 top-[70px] left-0 w-full h-full bg-slate-800 flex flex-col gap-5 pt-7 font-poppins font-bold text-gray-200 items-center  transition-all md:hidden ">
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/products/1" >Men</NavLink>
          <NavLink to="/products/3" >Watch</NavLink>
          <NavLink to="/products/4" >Kids</NavLink>
          <NavLink to="/products/7" >Shoes</NavLink>
          <NavLink to="/products/" >Cap</NavLink>
          <NavLink to="/products/" >Glasses</NavLink>
          <NavLink to="/about" >About</NavLink>
          <NavLink to="/contact" >Contact</NavLink>
          
        </div>
      )}
    </section>
  );
};

export default Navbar;
