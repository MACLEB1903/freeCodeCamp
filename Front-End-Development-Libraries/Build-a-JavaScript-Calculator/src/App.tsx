import Standard from "./components/Mode/Standard";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Standard />
    </ThemeProvider>
  );
}

export default App;
