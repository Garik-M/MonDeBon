import React, { useRef } from "react";
import { useGsapScrollList } from "@/hooks/useGsapScrollList";
import styles from "./About.module.scss";

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const blockRefs = useRef<HTMLElement[]>([]);

  const setBlockRef = (el: HTMLElement | null, index: number) => {
    if (!el) return;
    blockRefs.current[index] = el;
  };

  useGsapScrollList();

  return (
    <section className={styles.about} id="About">
      <div className={styles.rainbow}>
        <img src="https://gallery.yopriceville.com/downloadfullsize/send/14564" />
      </div>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.context}>
            <p className={styles.tagline}>Մեր մասին</p>

            {/* attach containerRef to the element that holds all blocks */}
            <div className={styles.textBlocks} ref={containerRef as any}>
              <div
                className={styles.textBlock}
                ref={(el) => setBlockRef(el, 0)}
              >
                Մեր յուրաքանչյուր տոն մշակվում է սիրով, մանրակրկիթ մոտեցմամբ և
                անհատական ծրագրով՝ այնպես, որ յուրաքանչյուր երեխա իրեն զգա
                պատմության հերոս։ Մեր ամենամեծ նվաճումը այն ժպիտներն են, որոնք
                տեսնում ենք յուրաքանչյուր փոքրիկի դեմքին միջոցառման ավարտին։ Մեր
                առաքելությունն է՝ տալ երեխաներին ուրախություն, զարգացնել
                երևակայությունը և հիշեցնել, որ հրաշքները դեռ կան։
              </div>

              <div
                className={styles.textBlock}
                ref={(el) => setBlockRef(el, 1)}
              >
                Մենք ստեղծեցինք Մոնդեբոնը, որովհետև հավատում ենք՝ մանկական տոնը
                պարզապես ծրագիր չէ, այն հիշողություն է, որը երեխան իր հետ տանում
                է երկար տարիներ։ Շատ միջոցառումներ կորցնում են իրենց իսկական
                փայլը՝ վերածվելով սովորական խաղերի։
              </div>

              <div
                className={styles.textBlock}
                ref={(el) => setBlockRef(el, 2)}
              >
                Մենք ուզում էինք վերադարձնել այդ հեքիաթային զգացումը՝ սրտանց
                ծիծաղը, ջերմությունը և անմեղ ուրախությունը։ Մոնդեբոնը ստեղծագործ
                խաղավարների թիմ է, որը կազմակերպում է մանկական միջոցառումներ՝
                յուրօրինակ սցենարներով, կերպարներով և խաղերով։
              </div>
            </div>

            <p className={styles.callback}>Ուղևորվում ենք Մոնդեբոն 🌞</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
