import styles from "./Home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainHero from "@/components/MainHero";
import About from "@/components/About";
import ContactUs from "@/components/Contact";

const Home = () => {
  return (
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
