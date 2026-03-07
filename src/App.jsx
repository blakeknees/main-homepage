import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dev from "./components/Dev";
import Cannabis from "./components/Cannabis";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/cannabis" element={<Cannabis />} />
      </Routes>
    </BrowserRouter>
  );
}
