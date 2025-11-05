import "@styles/App.scss";
import Home from "./pages/Home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);
  
  return (
    <>
      <Home />
    </>
  );
};

export default App;
