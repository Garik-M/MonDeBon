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
      <div className={`${styles.contact} container`} id="Contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" id="name" />
          </div>
          <div className={styles.container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" />
          </div>
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    // </div>
  );
};

export default ContactUs;
