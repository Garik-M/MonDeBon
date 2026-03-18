import { useEffect } from "react";
import Header from "../Header";
import styles from "./Hero.module.scss";
import { useMediaQuery } from "react-responsive";
import Streamers from "@assets/images/PNG/Streamers.png";
import Lights from "@assets/images/PNG/FairyLights.png";
import Heros from "@assets/images/heros.webp";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 666 });

  useEffect(() => {
    const header = document.querySelector("header");
    const hero = document.querySelector<HTMLDivElement>(`.${styles.hero}`);
    if (!header || !hero) return;

    const update = () => {
      const top = hero.getBoundingClientRect().top - 10;

      if (top <= 0) {
        header.style.top = "10px";
        header.style.maxWidth = isMobile
          ? "calc(100% - 20px)"
          : "calc(1250px - 40px)";
      } else {
        if (isMobile) {
          header.style.top = "70px";
        } else {
          header.style.top = "90px";
        }
        header.style.maxWidth = isMobile ? "100%" : "calc(1250px - 40px)";
      }
    };
    if (isMobile) {
      hero.style.marginTop = "-20px";
    }

    // Initial calculation
    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isMobile]);

  const scrollToServices = () => {
    const section = document.getElementById("Services");
    section!.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.tagline}>
            <p>Բարի գալուստ Մոնդեբոն</p>
            <button className={styles.explore} onClick={scrollToServices}>
              Explore Our Services
            </button>
          </div>
          <div className={styles.img}>
            <img src={Heros} alt="hero img" width="480" height="480" />
          </div>
          <>
            <img
              src={Streamers}
              alt="decoration"
              width="100"
              className={styles.streams}
            />
            <img
              src={Lights}
              alt="decoration"
              width="100"
              className={styles.lights}
            />
          </>
        </div>
      </div>
    </>
  );
};

export default Hero;
