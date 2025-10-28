import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={`${styles.container} container`}>
        <nav>
          <div>Home</div>
          <div>Services</div>
          <div>About us</div>
          <div>Contact</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;