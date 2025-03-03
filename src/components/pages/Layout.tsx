import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { createContext, useEffect, useRef, RefObject } from "react";
import { useLocation } from "react-router-dom";

const NavRefContext = createContext<RefObject<HTMLElement | null> | null>(null);

export default function Layout() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <NavRefContext.Provider value={navRef}>
      <Header navRef={navRef} />
      <Outlet />
      <Footer />
    </NavRefContext.Provider>
  );
}

export { NavRefContext };
