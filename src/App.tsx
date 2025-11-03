import "@styles/App.scss";
import Home from "./pages/Home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Home />
    </>
  );
};

export default App;
