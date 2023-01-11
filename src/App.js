import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
