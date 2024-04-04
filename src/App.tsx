import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
