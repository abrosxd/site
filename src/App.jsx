import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";

export default function App() {
  const location = useLocation();
  return (
    <>
      <Logo />
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
