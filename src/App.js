import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Body from "./pages/Body";

import "./App.css";
import Animate from "./utils/Animate";

function App() {
  return (
    <BrowserRouter>
      <Animate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Body" element={<Body />} />
        </Routes>
      </Animate>
    </BrowserRouter>
  );
}

export default App;
