import styles from "./MainHero.module.scss";

const MainHero = () => {
  return (
    <section className={styles.mainHero} id={"top"}>
      <div className={`container`}>
        <div className={styles.main}>
          <p className={styles.welcome}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            aliquid vero pariatur quaerat animi aut molestias. Architecto magni
            natus labore?
          </p>
          <div className={styles.hero1}>
            <img className={styles.hero} src="https://static.vecteezy.com/system/resources/previews/024/785/847/non_2x/3d-male-character-waving-free-png.png" />
            <img className={styles.cloud} src="https://clipart-library.com/img/1887208.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
