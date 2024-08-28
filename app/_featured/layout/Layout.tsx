"use client";
import React, { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { usePathname, useRouter } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const noLayoutPages = ["/", "/register"];
  const shouldShowLayout = !noLayoutPages.includes(pathname);

  return (
    <>
      {shouldShowLayout && <Header />}
      <main>{children}</main>
      {shouldShowLayout && <Footer />}
    </>
  );
};

export default Layout;
