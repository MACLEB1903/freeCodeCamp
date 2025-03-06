import Pomofocus from "./components/Pomofocus";
import { ThemeProvider } from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <Pomofocus />
    </ThemeProvider>
  );
}

export default App;
