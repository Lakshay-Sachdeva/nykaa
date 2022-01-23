import { Home } from "./components/Home/Home";
import NavBar from "./components/Home/NavBar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/ProductsGrid";
// import { Payment } from "./components/payment/payment";
import UserAuth from "./components/Auth/userAuth";
import ProductDetails from "./components/Products/product";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/user" element={<UserAuth />}></Route>
        <Route path="/productdescription" element={<ProductDetails />}></Route>
        {/* <Route path="/cart" element={<Products />}></Route>
        <Route path="/payment" element={<Payment />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
