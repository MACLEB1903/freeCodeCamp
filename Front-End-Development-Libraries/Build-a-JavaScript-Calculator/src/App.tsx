import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Standard from "./components/Mode/Standard";
import Currency from "./components/Mode/Currency";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Standard />} />
          <Route path="/currency" element={<Currency />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
