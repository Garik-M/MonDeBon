import styles from "./MainHero.module.scss";
import cloud1 from "@assets/images/cloud1.png";
import cloud2 from "@assets/images/cloud2.png";
import cloud3 from "@assets/images/cloud3.png";
import cloud4 from "@assets/images/cloud4.png";
import { useGsapHero } from "@hooks/useGsapHero";

const MainHero = () => {
  useGsapHero();
  const clouds = [cloud1, cloud2, cloud1, cloud3, cloud4];

  return (
    <section className={styles.mainHero} id="Top">
      <div className={styles.clouds}>
        {clouds.map((val, i) => (
          <img
            key={i}
            src={val}
            className={`${styles.cloud} cloud`}
            fetchPriority="high"
          />
        ))}
      </div>
      <div className={`container`}>
        <div className={styles.main}>
          <p className={styles.welcome} id="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aliquid vero pariatur quaerat animi aut molestias. Architecto magni
            natus labore?
          </p>
          <div className={styles.hero1} id="hero1">
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
        <div className={styles.main}>
          <div className={styles.hero1} id="hero2">
            <img
              className={styles.hero}
              src="https://static.vecteezy.com/system/resources/previews/024/785/847/non_2x/3d-male-character-waving-free-png.png"
            />
            <img
              className={styles.cloud}
              src="https://clipart-library.com/img/1887208.png"
            />
          </div>
          <p className={styles.welcome} id="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aliquid vero pariatur quaerat animi aut molestias. Architecto magni
            natus labore?
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
