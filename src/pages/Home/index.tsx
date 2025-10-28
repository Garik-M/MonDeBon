import styles from "./Home.module.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;