import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const URL = "https://dummyjson.com/quotes/random";

    const fetchQuotes = async () => {
      const response = await fetch(URL);
      const quote = await response.json();
      setQuote(quote);
    };

    fetchQuotes();
  }, []);

  console.log(quote);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
