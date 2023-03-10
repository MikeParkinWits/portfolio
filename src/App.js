import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMePage from "./pages/AboutMePage";
import Home from "./pages/Home";
import "./styles/main.css";
import { useEffect } from "react";

//Google Analytics
import ReactGA from "react-ga";
import PortfolioPage from "./pages/PortfolioPage";
import Portfolio0 from "./pages/portfolioPages/Portfolio0";
import Portfolio1 from "./pages/portfolioPages/Portfolio1";
import Portfolio2 from "./pages/portfolioPages/Portfolio2";
import Portfolio3 from "./pages/portfolioPages/Portfolio3";
import WritingPage from "./pages/WritingPage";
// import Research1 from "./pages/researchPages/Research1";
import Research2 from "./pages/researchPages/Research2";
import Portfolio4 from "./pages/portfolioPages/Portfolio4";

const TRACKING_ID = "UA-254281648-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about_me" element={<AboutMePage />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/portfolio0" element={<Portfolio0 />} />
          <Route path="/portfolio/portfolio1" element={<Portfolio1 />} />
          <Route path="/portfolio/portfolio2" element={<Portfolio2 />} />
          <Route path="/portfolio/portfolio3" element={<Portfolio3 />} />
          <Route path="/portfolio/portfolio4" element={<Portfolio4 />} />

          <Route path="/research" element={<WritingPage />} />
          {/* <Route path="/research/research1" element={<Research1 />} /> */}
          <Route path="/research/research2" element={<Research2 />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
