import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Allproduct from "./component/Allproduct";
import Item from "./component/Item";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import Notfound from "./component/Notfound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Allproduct />}></Route>
          <Route path="/product/:id" element={<Item />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
