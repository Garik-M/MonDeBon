import Footer from "@/components/Footer";
import MainHero from "@/components/MainHero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import ContactUs from "@/components/Contact";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

import cloud1 from "@/assets/images/cloud1.png";
import cloud2 from "@/assets/images/cloud2.png";
import cloud3 from "@/assets/images/cloud3.png";
import cloud4 from "@/assets/images/cloud4.png";
import img1 from "@/assets/images/1.jpg";
import img3 from "@/assets/images/3.png";
import rainbow from "@/assets/images/rainbow.png";
import sky from "@/assets/images/sky.png";
// Gallery images for preloading
import galleryImg1 from "@/assets/images/IMG_0022.jpg";
import galleryImg2 from "@/assets/images/IMG_0049.jpg";
import galleryImg3 from "@/assets/images/IMG_9714.jpg";
import galleryImg4 from "@/assets/images/IMG_9759.jpg";
import galleryImg5 from "@/assets/images/IMG_9788.jpg";
import galleryImg6 from "@/assets/images/IMG_9865.jpg";
import galleryImg7 from "@/assets/images/IMG_9957.jpg";
import Services from "@/components/Services";
import Hero from "@/components/Hero";
import type { ServicesData } from "@/types";
import { servicesData } from "@/data/services";

const Home = () => {
  const [data, setData] = useState<ServicesData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
          galleryImg1,
          galleryImg2,
          galleryImg3,
          galleryImg4,
          galleryImg5,
          galleryImg6,
          galleryImg7,
        ];

        const imagePromises = imageUrls.map(
          (src) =>
            new Promise<void>((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve();
              img.onerror = () => reject();
            }),
        );

        const filtered = servicesData.filter((obj) => obj.is);
        setData(filtered);

        await Promise.all(imagePromises);

        setIsLoading(false);
      } catch (err) {
        console.error("Error preloading assets:", err);
        setIsLoading(false);
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

  return isLoading ? (
    <Loading />
  ) : (
    // <div className={styles.wrapper}>
    <>
      <Hero />
      <MainHero />
      <About />
      <Gallery />
      <Services data={data} setData={setData} />
      <ContactUs />
      <Footer />
    </>
    // </div>
  );
};

export default Home;
