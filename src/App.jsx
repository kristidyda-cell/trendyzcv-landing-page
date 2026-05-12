import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PremiumCV from "./pages/PremiumCV";
import PricingPage from "./pages/PricingPage";
import ReviewsPage from "./pages/ReviewsPage";
import LinkedInPage from "./pages/LinkedInPage";
import JobPortalPage from "./pages/JobPortalPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden pt-20">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium-cv" element={<PremiumCV />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/linkedin-optimization" element={<LinkedInPage />} />
          <Route path="/job-portal" element={<JobPortalPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}