"use client";
import React, { ReactNode, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const noLayoutPages = ["/", "/register"];
  const shouldShowLayout = !noLayoutPages.includes(pathname);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      {shouldShowLayout && (
        <Sidebar
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
      )}
      {shouldShowLayout && <Header handleSideBar={handleSideBar} />}
      <main>{children}</main>
      {shouldShowLayout && <Footer />}
    </>
  );
};

export default Layout;
