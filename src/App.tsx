import { type Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import type { Action } from "redux";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Login from "./routes/login/login.component";
import Shop from "./routes/shop/shop.component";
import { checkUserSession } from "./store/user/user.slice";

export default function App() {
  const dispatch: Dispatch<Action<"user/checkUserSession">> = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="login" element={<Login />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
