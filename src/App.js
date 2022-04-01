import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainBody from "./components/Body/MainBody";
import Cart from "./components/Cart/Cart";
import MainHeader from "./components/Header/MainHeader";

function App() {
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
              <Cart />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
