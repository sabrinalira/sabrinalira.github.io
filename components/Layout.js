import React from "react";
import { Nav } from "./Navbar";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { navigation, SEO } from "../config/config";

const Layout = ({ children }) => {
  return (
    <div>
      <Header seo={SEO} />
      <Nav title={navigation.name} links={navigation.links} />
      <main className="mt-5">{children}</main> <Footer />
    </div>
  );
};

export default Layout;
