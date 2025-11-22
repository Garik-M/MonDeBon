import { PropagateLoader } from "react-spinners";
import styles from "./Loading.module.scss";
import logo from "@assets/images/3.png";

const Loading = () => {
  return (
    <section className={styles.loading}>
      <img src={logo} alt="logo"/>
      <PropagateLoader />
    </section>
  );
};

export default Loading;
