import styles from "./Contact.module.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "@components/Input";
import { inputArr, schema } from "@/utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import faces from "@assets/images/faces.png";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendEmail = async (data: any) => {
    try {
      const result = await emailjs.send(
        "service_a3dt3zd",
        "template_vgn1ly7",
        data,
        "pXA3uyqkeujWdbTlJ"
      );

      console.log("SUCCESS:", result.text);
    } catch (error: any) {
      console.log("ERROR:", error.text);
    }
  };

  const filled = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isFilled) {
      setIsFilled(true);
    } else if (e.target.value.trim() === "") {
      setIsFilled(false);
    }
  };

  return (
    <div className={styles.wrapper} id="Contact">
      <div className={styles.contactUs}>
        <div className="container">
          <div className={styles.contact}>
            <div className={styles.mask}>
              <div className={styles.tagline}>Կապ մեզ հետ</div>
              <img className={styles.maskImg} src={faces} alt="contact img"/>
            </div>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              {inputArr.map((val, i) => (
                <Input
                  value={val}
                  key={i}
                  register={register}
                  errors={errors}
                />
              ))}
              <div className={styles.areaWrapper}>
                <label
                  htmlFor="textarea"
                  className={isFilled ? styles.filled : ""}
                >
                  Հաղորդագրություն
                </label>
                <textarea
                  id="textarea"
                  {...register("message", {
                    onChange: filled,
                  })}
                />
                <p className={styles.err}>{errors.message?.message}</p>
              </div>
              <input type="submit" value="Ուղարկել" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
