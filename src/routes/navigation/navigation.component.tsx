import { Link, Outlet } from "react-router-dom";
import Header from "../../layout/Header/header.component";
import Layout from "../../layout/layout.component";

export default function Navigation() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
