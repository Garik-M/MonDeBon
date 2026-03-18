import React, { memo } from "react";
import styles from "./About.module.scss";
import rainbow from "@assets/images/rainbow.webp";

// Static content for better performance
const ABOUT_CONTENT = {
  tagline: "Մեր մասին",
  callback: "Ուղևորվում ենք Մոնդեբոն 🌞",
  textBlocks: [
    "Մեր յուրաքանչյուր տոն մշակվում է սիրով, մանրակրկիտ մոտեցմամբ և անհատական ծրագրով՝ այնպես, որ յուրաքանչյուր երեխա իրեն զգա պատմության հերոս։ Մեր ամենամեծ նվաճումը այն ժպիտներն են, որոնք տեսնում ենք յուրաքանչյուր փոքրիկի դեմքին միջոցառման ավարտին։ Մեր առաքելությունն է՝ տալ երեխաներին ուրախություն, զարգացնել երևակայությունը և հիշեցնել, որ հրաշքները դեռ կան։",
    "Մենք ստեղծեցինք Մոնդեբոնը, որովհետև հավատում ենք՝ մանկական տոնը պարզապես ծրագիր չէ, այն հիշողություն է, որը երեխան իր հետ տանում է երկար տարիներ։ Մենք ուզում էինք վերադարձնել այդ հեքիաթային զգացումը՝ սրտանց ծիծաղը, ջերմությունը և անմեղ ուրախությունը։ Շատ միջոցառումներ կորցնում են իրենց իսկական փայլը՝ վերածվելով սովորական խաղերի։ Մոնդեբոնը ստեղծագործ խաղավարների թիմ է, որը կազմակերպում է մանկական միջոցառումներ՝ յուրօրինակ սցենարներով, կերպարներով և խաղերով։",
  ],
} as const;

const About: React.FC = memo(() => {
  return (
    <section
      className={styles.about}
      id="About"
      aria-labelledby="about-heading"
    >
      <div className={styles.rainbow} aria-hidden="true">
        <img src={rainbow} alt="" loading="lazy" decoding="async" />
      </div>

      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.context}>
            <h2 id="about-heading" className={styles.tagline}>
              {ABOUT_CONTENT.tagline}
            </h2>

            <div
              className={styles.textBlocks}
              role="region"
              aria-label="About us content"
            >
              {ABOUT_CONTENT.textBlocks.map((text, index) => (
                <div key={index} className={styles.textBlock} role="article">
                  {text}
                </div>
              ))}
            </div>

            <p className={styles.callback} role="banner">
              {ABOUT_CONTENT.callback}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
