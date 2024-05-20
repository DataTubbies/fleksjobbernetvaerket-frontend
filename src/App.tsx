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

export default function App() {
  return (
    <>
      <Header />
      <MobileNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vidensportalen" element={<Vidensportalen />} />
        <Route path="/artikler" element={<Artikler />} />
        <Route path="/fleksjobberdagen" element={<Fleksjobberdagen />} />
        <Route path="/jobmuligheder" element={<Jobmuligheder />} />
        <Route path="/kontakt" element={<KontaktSide />} />
        <Route path="/om" element={<Om />} />
        <Route path="/ordbog" element={<Ordbog />} />
      </Routes>
      <Footer />
    </>
  );
}
