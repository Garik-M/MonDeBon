import gsap from "gsap";
import styles from "./MainHero.module.scss";
import { useGSAP } from "@gsap/react";
import cloud1 from "@assets/images/cloud1.png";
import cloud2 from "@assets/images/cloud2.png";
import cloud3 from "@assets/images/cloud3.png";
import cloud4 from "@assets/images/cloud4.png";

const MainHero = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const clouds = gsap.utils.toArray<HTMLElement>(".cloud");

    const factors = clouds.map(() => ({
      x: gsap.utils.random(-40, 40),
      y: gsap.utils.random(-35, 35),
      speed: gsap.utils.random(0.6, 1),
    }));

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      clouds.forEach((cloud, i) => {
        const { x: fx, y: fy, speed } = factors[i];
        gsap.to(cloud, {
          x: x * fx * 3,
          y: y * fy * 3,
          duration: speed + 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useGSAP(() => {
    gsap.from("#hero", {
      x: 700,
      opacity: 0,
      scale: 0.8,
      duration: 1.5,
      ease: "power2.out",
    });
  }, []);


  return (
    <section className={styles.mainHero} id={"Top"}>
      <div className={styles.clouds}>
        <img
          src={cloud1}
          className={`${styles.cloud} cloud`}
          fetchPriority="high"
        />
        <img
          src={cloud2}
          className={`${styles.cloud} cloud`}
          fetchPriority="high"
        />
        <img
          src={cloud1}
          className={`${styles.cloud} cloud`}
          fetchPriority="high"
        />
        <img
          src={cloud3}
          className={`${styles.cloud} cloud`}
          fetchPriority="high"
        />
        <img
          src={cloud4}
          className={`${styles.cloud} cloud`}
          fetchPriority="high"
        />
      </div>
      <div className={`container`}>
        <div className={styles.main}>
          <p className={styles.welcome} id="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aliquid vero pariatur quaerat animi aut molestias. Architecto magni
            natus labore?
          </p>
          <div className={styles.hero1} id="hero">
            <img
              className={styles.hero}
              src="https://static.vecteezy.com/system/resources/previews/024/785/847/non_2x/3d-male-character-waving-free-png.png"
            />
            <img
              className={styles.cloud}
              src="https://clipart-library.com/img/1887208.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
