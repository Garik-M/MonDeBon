import styles from "./Header.module.scss";
import img from "@assets/images/3.png";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const menuRef = useRef<HTMLDivElement>(null);

  const openBar = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // cleanup on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link to="Top" smooth={true} duration={500}>
            <img src={img} fetchPriority="high"/>
          </Link>
        </div>
        <nav>
          <Link to="Top" smooth={true} duration={500}>
            Գլխավոր Էջ
          </Link>
          <Link to="About" smooth={true} duration={500}>
            Մեր Մասին
          </Link>
          <Link to="Services" smooth={true} duration={500}>
            Մեր Ծառայությունները
          </Link>
          <Link to="Contact" smooth={true} duration={500}>
            Կապ Մեզ Հետ
          </Link>
        </nav>
        <div className={styles.list} ref={menuRef}>
          <Hamburger
            toggle={openBar}
            onToggle={(toggle) => !toggle}
            toggled={isOpen}
          />
          {isOpen ? (
            <div className={styles.mobileNav}>
              <div className={styles.bar}>
                <Link to="Top" smooth={true} duration={500} onClick={openBar}>
                  Գլխավոր Էջ
                </Link>
                <Link to="Services" smooth={true} duration={500} onClick={openBar}>
                  Մեր Ծառայությունները
                </Link>
                <Link to="About" smooth={true} duration={500} onClick={openBar}>
                  Մեր Մասին
                </Link>
                <Link to="Contact" smooth={true} duration={500} onClick={openBar}>
                  Կապ Մեզ Հետ
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
