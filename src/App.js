import Home from "../src/pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Layout from "./pages/Layout";
import WishList from "./pages/WishList";




function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productlist/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
