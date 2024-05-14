import { type Dispatch, lazy, useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import type { Action } from "redux";
import Loader from "./components/loader/loader.component";
import { checkUserSession } from "./store/user/user.slice";

const Home = lazy(() => import("./routes/home/home.component"));
const Login = lazy(() => import("./routes/login/login.component"));
const Navigation = lazy(
  () => import("./routes/navigation/navigation.component"),
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));

export default function App() {
  const dispatch: Dispatch<Action<"user/checkUserSession">> = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
