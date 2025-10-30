import styles from "./Home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainHero from "@/components/MainHero";
import About from "@/components/About";

const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <MainHero />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default Home;