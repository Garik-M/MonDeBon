import "@styles/App.scss";
import Home from "./pages/Home";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const handleLoad = () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 10);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
