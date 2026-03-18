import styles from "./MainHero.module.scss";
import cloud1 from "@assets/images/cloud1.webp";
import cloud2 from "@assets/images/cloud2.webp";
import cloud3 from "@assets/images/cloud3.webp";
import cloud4 from "@assets/images/cloud4.webp";
import sky from "@/assets/images/sky.webp";
import Mon from "@assets/images/mon.webp";
import Bon from "@assets/images/Bon.webp";
import { useGsapHero } from "@hooks/useGsapHero";

const MainHero = () => {
  useGsapHero();

  const clouds = [cloud1, cloud2, cloud1, cloud3, cloud4];

  const cloudimages = clouds.map((val, i) => (
    <img
      key={i}
      src={val}
      className={`${styles.cloud} cloud`}
      alt={`cloud${i}`}
    />
  ));
  return (
    <section className={styles.mainHero} id="Top">
      <img src={sky} className={styles.background} alt="" />

      <div className={styles.clouds}>{cloudimages}</div>

      <main className="container">
        <div className={styles.main}>
          <p className={styles.welcome}>
            Մոնը բարի է, նուրբ ու երազկոտ։ Նա սիրում է գտնել նոր գաղափարներ
            ամպերի մեջ և հավատալ, որ ամեն բան հնարավոր է։ Մոնը փոքրիկներին
            սովորեցնում է տեսնել հրաշքը ամեն մանրուքում։
          </p>

          <div className={styles.hero1} id="heroRight">
            <img
              className={styles.hero}
              src={Mon}
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
              src={Bon}
              alt="Hero 2"
            />
            <img
              className={styles.heroCloud}
              src="https://clipart-library.com/img/1887208.png"
              alt="Hero Cloud 2"
            />
          </div>
          <p className={styles.welcome}>
            Բոնն արևի պես ջերմ, աշխույժ ու հնարամիտ է։ Նա միշտ շարժման մեջ է,
            կազմակերպում է խաղեր, պարեր և զվարճալի փորձություններ՝ վարակելով
            բոլորին իր ուրախությամբ։
          </p>
        </div>
      </main>
    </section>
  );
};

export default MainHero;
