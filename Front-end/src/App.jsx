import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/products/Product";
import ProductItem from "./pages/product/ItemProduct";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import LogIn from "./Auth/LogIn";
import SingUp from "./Auth/SingUp";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="/contact" element={<ContactUs />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
