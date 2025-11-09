import styles from "./MainHero.module.scss";
import cloud1 from "@assets/images/cloud1.png";
import cloud2 from "@assets/images/cloud2.png";
import cloud3 from "@assets/images/cloud3.png";
import cloud4 from "@assets/images/cloud4.png";
import sky from "@/assets/images/sky.png";
import { useGsapHero } from "@hooks/useGsapHero";

const MainHero = () => {
  useGsapHero();

  const clouds = [cloud1, cloud2, cloud1, cloud3, cloud4];

  const cloudimages = clouds.map((val, i) => (
    <img
      key={i}
      src={val}
      className={`${styles.cloud} cloud`}
      fetchPriority="high"
    />
  ));
  return (
    <section className={styles.mainHero} id="Top">
      <img src={sky} className={styles.background} />

      <div className={styles.clouds}>{cloudimages}</div>

      <div className="container">
        <div className={styles.main}>
          <p className={styles.welcome}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, odio
            ullam iure neque itaque pariatur repellendus architecto eligendi
            optio voluptatum.
          </p>

          <div className={styles.hero1} id="heroRight">
            <img
              className={styles.hero}
              src="https://static.vecteezy.com/system/resources/previews/024/785/847/non_2x/3d-male-character-waving-free-png.png"
              alt="Hero 1"
            />
            <img
              className={styles.heroCloud}
              src="https://clipart-library.com/img/1887208.png"
              alt="Hero Cloud 1"
            />
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.hero1} id="heroLeft">
            <img
              className={styles.hero}
              src="https://static.vecteezy.com/system/resources/previews/024/785/847/non_2x/3d-male-character-waving-free-png.png"
              alt="Hero 2"
            />
            <img
              className={styles.heroCloud}
              src="https://clipart-library.com/img/1887208.png"
              alt="Hero Cloud 2"
            />
          </div>
          <p className={styles.welcome}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            excepturi architecto cupiditate vero incidunt temporibus laudantium
            aut eaque reiciendis provident?
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
