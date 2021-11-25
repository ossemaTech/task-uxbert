import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: any }) {
  return (
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
