import styles from "./Contact.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "@components/Input";
import type { InputData } from "@/types";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const inputArr: InputData[] = [
    {
      value: "Անուն",
      id: "name",
    },
    {
      value: "Էլ. Հասցե",
      id: "email",
    },
    {
      value: "Հասցե",
      id: "address",
    },
    {
      value: "Հեռախոսահամար",
      id: "tel",
    },
  ];
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
  const filled = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isFilled) {
      setIsFilled(true);
    } else if (e.target.value.trim() === "") {
      setIsFilled(false);
    }
  };

  return (
    <div className={styles.contactUs}>
      <div className="container">
        <div className={styles.contact} id="Contact">
          <form ref={form} onSubmit={sendEmail}>
            {inputArr.map((val, i) => (
              <Input value={val} key={i}/>
            ))}
            <div className={styles.areaWrapper}>
              <label
                htmlFor="textarea"
                className={isFilled ? styles.filled : ""}
              >
                Հաղորդագրություն
              </label>
              <textarea name="message" id="textarea" onChange={filled} />
            </div>
            <input type="submit" value="Ուղարկել" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
