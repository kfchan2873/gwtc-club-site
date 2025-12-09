import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Membership from "./pages/Membership.jsx";
import BookCourt from "./pages/BookCourt.jsx";
import Coaching from "./pages/Coaching.jsx";
import CompetitionsSocial from "./pages/CompetitionsSocial.jsx";
import NewsEvents from "./pages/NewsEvents.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Location from "./pages/Location.jsx";


function App() {
  return (
    <Layout>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/membership" element={<Membership />} />
  <Route path="/book-court" element={<BookCourt />} />
  <Route path="/coaching" element={<Coaching />} />
  <Route path="/competitions-social" element={<CompetitionsSocial />} />
  <Route path="/news-events" element={<NewsEvents />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/location" element={<Location />} /> {/* 👈 new */}
</Routes>

    </Layout>
  );
}

export default App;
