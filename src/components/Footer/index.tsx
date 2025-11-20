import styles from "./Footer.module.scss";
import logo from "@assets/images/1.jpg";
import Mail from "@assets/svg/mail.svg";
import Tel from "@assets/svg/tel.svg";
import Facebook from "@assets/svg/facebook.svg";
import Instagram from "@assets/svg/instagram.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.container} container`}>
        <div className={styles.wrapper}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.headline}>Բաժիններ</div>
          <a
            href="#Top"
            className={styles.section}
            onClick={(e) => e.preventDefault()}
          >
            <Link to="Top" smooth={true} duration={1000}>
              Գլխավոր Էջ
            </Link>
          </a>
          <a
            href="#About"
            className={styles.section}
            onClick={(e) => e.preventDefault()}
          >
            <Link to="About" smooth={true} duration={1000}>
              Մեր Մասին
            </Link>
          </a>
          <a
            href="#Services"
            className={styles.section}
            onClick={(e) => e.preventDefault()}
          >
            <Link to="Services" smooth={true} duration={1000}>
              Մեր Ծառայությունները
            </Link>
          </a>
          <a
            href="#Contact"
            className={styles.section}
            onClick={(e) => e.preventDefault()}
          >
            <Link to="Contact" smooth={true} duration={1000}>
              Կապ Մեզ Հետ
            </Link>
          </a>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.headline}>Կապ Մեզ Հետ</div>
          <a href="mailto:mondebon.am@gmail.com" className={styles.section}>
            <div className={styles.info}>
              <div className={styles.circle}>
                <Mail />
              </div>
              <p>mondebon.am@gmail.com</p>
            </div>
          </a>
          <a href="tel:+37498328080" className={styles.section}>
            <div className={styles.info}>
              <div className={styles.circle}>
                <Tel />
              </div>
              <p>+374 98328080</p>
            </div>
          </a>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.headline}>Սոց. հարթակներ</div>

          <a
            href="https://www.instagram.com/mondebon_official?igsh=MWtnZWRxbzlldThoOA=="
            target="_blank"
            className={styles.section}
          >
            <div className={styles.info}>
              <div className={styles.circle}>
                <Instagram />
              </div>
              <p>Instagram</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/share/1PwXyfKiMQ/?mibextid=wwXIfr"
            target="_blank"
            className={styles.section}
          >
            <div className={styles.info}>
              <div className={styles.circle}>
                <Facebook />
              </div>
              <p>Facebook</p>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.rights}>
        Copyright © 2025 mondebon.am - All rights reserved | Power by SaySenior
      </div>
    </footer>
  );
};

export default Footer;
