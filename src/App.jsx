import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Logo from "./components/Logo/Logo";
import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";

import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Library from "./pages/Library/Library";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";

import Lampa from "./pages/Work/Projects/Lampa/Lampa";

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
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/lib" element={<Library />} />
              <Route path="/about" element={<About />} />
              <Route path="/work/lampa" element={<Lampa />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  );
}
