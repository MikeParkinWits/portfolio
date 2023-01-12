import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/main.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
