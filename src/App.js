import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainBody from "./components/Body/MainBody";
import Cart from "./components/Cart/Cart";
import EmptyCart from "./components/Cart/EmptyCart";
import MainHeader from "./components/Header/MainHeader";

function App() {
  const cartItems = useSelector((state) => state.cart.items);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(cartItems.length !== 0 ? false : true);
  }, [cartItems]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <MainHeader />
              <MainBody />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <MainHeader />
              {!isEmpty ? <Cart /> : <EmptyCart />}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
