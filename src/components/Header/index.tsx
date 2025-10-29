import { Link } from "react-scroll";
import styles from "./Header.module.scss";
import img from "@assets/images/3.png";

const Header = () => {
  return (
    <header>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link to="Top" smooth={true} duration={500}>
            <img src={img} />
          </Link>
        </div>
        <nav>
          <Link to="Top" smooth={true} duration={500}>Գլխավոր Էջ</Link>
          <Link to="Services" smooth={true} duration={500}>
            Մեր Ծառայությունները
          </Link>
          <Link to="About" smooth={true} duration={500}>
            Մեր Մասին
          </Link>
          <Link to="Contact" smooth={true} duration={500}>
            Կապ Մեզ Հետ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
