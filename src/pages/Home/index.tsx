import styles from "./Home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainHero from "@/components/MainHero";
import About from "@/components/About";
import ContactUs from "@/components/Contact";
import { useState } from "react";
import Loading from "@/components/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return isLoading ? (
    <Loading />
  ) : (
    <div className={styles.wrapper}>
      <Header />
      <MainHero />
      <About />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
