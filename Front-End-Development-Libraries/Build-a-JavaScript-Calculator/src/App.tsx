import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Standard from "./components/Mode/Standard";
import Temperature from "./components/Mode/Temperature";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Standard />} />
          <Route path="/temperature" element={<Temperature />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
