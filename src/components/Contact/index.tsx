import styles from "./Contact.module.scss";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current as HTMLFormElement,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // <div className={styles.contactUs}>
    <div className="container">
      <div className={styles.contact} id="Contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.container}>
            <label htmlFor="name">Անուն</label>
            <input type="text" name="user_name" id="name" />
          </div>
          <div className={styles.container}>
            <label htmlFor="email">Էլ. հասցե</label>
            <input type="email" name="user_email" id="email" />
          </div>
          <div className={styles.areaContainer}>
            <label htmlFor="textarea">Հաղորդագրություն</label>
            <textarea name="message" id="textarea" />
          </div>
          <input type="submit" value="Ուղարկել" />
        </form>
      </div>
    </div>
    // </div>
  );
};

export default ContactUs;
