import styles from "./MainHero.module.scss";

const MainHero = () => {
  return (
    <div className={styles.mainHero} id={"top"}>
      <div className={`container`}>
        <p className={styles.welcome}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          aliquid vero pariatur quaerat animi aut molestias. Architecto magni
          natus labore?
        </p>
      </div>
    </div>
  );
};

export default MainHero;
