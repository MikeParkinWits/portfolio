import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <Routes>
          <Route>
            <Route path="/portfolio" element={<Home />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
