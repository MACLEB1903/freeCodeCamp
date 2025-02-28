import Header from "./components/Header";
import Main from "./components/Main";
import { QuotesProvider } from "./context/QuotesContext";

function App() {
  return (
    <QuotesProvider>
      <Header />
      <Main />
    </QuotesProvider>
  );
}

export default App;
