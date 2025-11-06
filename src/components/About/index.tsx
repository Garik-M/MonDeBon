import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="About">
      <div className={styles.rainbow}>
        <img src="https://gallery.yopriceville.com/downloadfullsize/send/14564" />
      </div>
      <div className={styles.wrapper}>
        <div className="container"></div>
      </div>
    </section>
  );
};

export default About;
