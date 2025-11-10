import styles from "./Loading.module.scss";
import logo from "@assets/Video/loading.mp4";

const Loading = () => {
  return (
    <section className={styles.loading}>
      <video src={logo} autoPlay loop muted playsInline />
    </section>
  );
};

export default Loading;
