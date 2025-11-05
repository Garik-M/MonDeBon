import "@styles/App.scss";
import Home from "./pages/Home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // give browser a moment to hydrate & paint
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Home />
    </>
  );
};

export default App;
