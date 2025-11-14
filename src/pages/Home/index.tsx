import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainHero from "@/components/MainHero";
import About from "@/components/About";
import ContactUs from "@/components/Contact";
import { useEffect, useState } from "react";
// import Loading from "@/components/Loading";

import cloud1 from "@/assets/images/cloud1.png";
import cloud2 from "@/assets/images/cloud2.png";
import cloud3 from "@/assets/images/cloud3.png";
import cloud4 from "@/assets/images/cloud4.png";
import img1 from "@/assets/images/1.jpg";
import img3 from "@/assets/images/3.png";
import rainbow from "@/assets/images/rainbow.png";
import sky from "@/assets/images/sky.png";
import Services from "@/components/Services";
import axios from "axios";
import type { ServicesData } from "@/types";

const Home = () => {
  const [data, setData] = useState<ServicesData[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const preloadAssets = async () => {
      try {
        const imageUrls = [
          cloud1,
          cloud2,
          cloud3,
          cloud4,
          img1,
          img3,
          rainbow,
          sky,
        ];

        const imagePromises = imageUrls.map(
          (src) =>
            new Promise<void>((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve();
              img.onerror = () => reject();
            })
        );
        axios
          .get<ServicesData[]>(
            "https://6911fde452a60f10c8202df3.mockapi.io/services"
          )
          .then((res) => {
            const filtered = res.data.filter((obj) => obj.is);
            setData(filtered);
          })
          .catch((err) => console.error("services error:", err));

        const delay = new Promise<void>((resolve) => setTimeout(resolve, 2000));

        await Promise.all([...imagePromises, delay, data]);

        // setIsLoading(false);
      } catch (err) {
        console.error("Error preloading assets:", err);
        // setIsLoading(false);
      }
    };

    preloadAssets();
  }, []);

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

  // return isLoading ? (
    // <Loading />
  // ) : (
  return (
    // <div className={styles.wrapper}>
    <>
      <Header />
      <MainHero />
      <About />
      <Services data={data} setData={setData} />
      <ContactUs />
      <Footer />
    </>
    // </div>
  );
};

export default Home;
