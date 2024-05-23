import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import KontaktSide from "./pages/KontaktSide";
import HomePage from "./pages/HomePage";
import Vidensportalen from "./pages/Vidensportalen";
import Jobmuligheder from "./pages/Jobmuligheder";
import Om from "./pages/Om";
import Fleksjobberdagen from "./pages/Fleksjobberdagen";
import Artikler from "./pages/Artikler";
import Ordbog from "./pages/Ordbog";
import MobileNav from "./components/MobileNav";

import Cookiepolitik from "./pages/Cookiepolitik";

import Links from "./pages/Links";
import Artikel from "./pages/Artikel";

import Persondatapolitik from "./pages/Persondatapolitik";
import Hjaelp from "./pages/Hjaelp";
import Mangfoldighedsklubben from "./pages/Mangfoldighedsklubben";
import CookieConsent from "react-cookie-consent";

export default function App() {
  return (
    <>
      <Header />
      <MobileNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vidensportalen" element={<Vidensportalen />} />
        <Route path="/artikler" element={<Artikler />} />
        <Route path="/artikler/:slug" element={<Artikel />} />{" "}
        {/* Add this route */}
        <Route path="/fleksjobberdagen" element={<Fleksjobberdagen />} />
        <Route path="/jobmuligheder" element={<Jobmuligheder />} />
        <Route path="/kontakt" element={<KontaktSide />} />
        <Route path="/om" element={<Om />} />
        <Route path="/ordbog" element={<Ordbog />} />
        <Route path="/links" element={<Links />} />
        <Route path="/persondatapolitik" element={<Persondatapolitik />} />
        <Route path="/cookiepolitik" element={<Cookiepolitik />} />
        <Route path="/hjaelp" element={<Hjaelp />} />
        <Route
          path="/mangfoldighedsklubben"
          element={<Mangfoldighedsklubben />}
        />
      </Routes>
      <CookieConsent
        buttonStyle={{
          borderRadius: "40px",
          background: "#5BA6AB",
          color: "white",
          fontSize: "14px",
          fontWeight: "bold",
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
        }}
        buttonText="Jeg giver samtykke 🍪"
      >
        Denne side benytter sig af cookies for at forbedre din oplevelse.{" "}
      </CookieConsent>

      <Footer />
    </>
  );
}
