import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Library from "./pages/Library/Library";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <Logo />
          <Navigation />
          <Cursor />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/lib" element={<Library />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}
