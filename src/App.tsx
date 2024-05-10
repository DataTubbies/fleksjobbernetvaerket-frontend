import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Kontakt from "./pages/Kontakt";
import HomePage from "./pages/HomePage";
import Vidensportalen from "./pages/Vidensportalen";
import Jobmuligheder from "./pages/Jobmuligheder";
import Om from "./pages/Om";
import Fleksjobberdagen from "./pages/Fleksjobberdagen";
import Artikler from "./pages/Artikler";

export default function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vidensportalen" element={<Vidensportalen />} />
        <Route path="/artikler" element={<Artikler />} />
        <Route path="/fleksjobberdagen" element={<Fleksjobberdagen />} />
        <Route path="/jobmuligheder" element={<Jobmuligheder />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/om" element={<Om />} />
      </Routes>
      <Footer />
    </>
  );
}
