import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMePage from "./pages/AboutMePage";
import Home from "./pages/Home";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_me" element={<AboutMePage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
