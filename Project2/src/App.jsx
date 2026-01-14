import { useState } from "react";
import "./App.css";
import { FaCartArrowDown } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { Link, Route, Routes } from "react-router-dom";
import AddCartItem from "./components/Items/AddCartItem";
import ViewCartItem from "./components/Items/ViewCartItem";
import iphone12 from "./assets/CartImages/12.jpg"

function Home() {
  const [cartItems, setCartItems] = useState([
    {
    id : Date.now(),
    name : "I Phone 12",
    price : 1400.00,
    image : iphone12
  }]);



  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="w-150 h-50 border-2 mt-14 items-center rounded-4xl flex flex-col gap-6">
        <h2 className="text-3xl font-bold flex mt-10">
          <Link
            to="/view-cart-items"
            state={cartItems}
            className="flex items-center gap-4 underline text-4xl"
          >
            View Cart
            <FaCartArrowDown size={30} color="red" />
          </Link>
        </h2>

        <h2 className="text-3xl font-bold flex mt-4">
          <Link
            to="/add-cart-item"
            state={cartItems}
            className="flex items-center gap-4 underline text-4xl"
          >
          Add Item to Cart <GrOverview size={30} color="red" className="ml-4" />
          </Link>
        </h2>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-cart-item" element={<AddCartItem />} />
      <Route path="/view-cart-items" element={<ViewCartItem />}/>
    </Routes>
  );
}

export default App;
