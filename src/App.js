import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Test from "./pages/test/Test";
import Products from "./pages/products/Products";

import "./styles/dark.scss";

const App = () => {
  return (
    <div className="apps">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userid" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<Products />} />
            </Route>
            <Route path="test" element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
