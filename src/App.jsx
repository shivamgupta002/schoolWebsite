import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

// Lazy load the components
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Academics = lazy(() => import("./pages/Academics"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Faculty = lazy(() => import("./pages/Faculty"));
const Students = lazy(() => import("./pages/Students"));
const Gallery = lazy(() => import("./pages/Gallery"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NoPage = lazy(() => import("./pages/NoPage.jsx"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
