import { useState } from "react";
import styles from "@components/Services/Services.module.scss";
import type { ServicesData } from "@/types";
import { Tooltip } from "react-tooltip";
import Dragger from "../Dragger";

type Props = {
  data: ServicesData[];
  setData: React.Dispatch<React.SetStateAction<ServicesData[]>>;
};
const Services = ({ data }: Props) => {
  const [selected, setSelected] = useState<ServicesData[]>([]);
  const [part, setPart] = useState<number>(0);

  const selecteds = selected.map((s, i) => (
    <div
      key={s.id}
      className={styles.service}
      draggable
      onDragStart={(e) => handleDragStart(e, s.id)}
      data-tooltip-content={s.name}
      data-tooltip-id={`tooltip-${i}`}
    >
      {s.name.length > 10 ? <Tooltip id={`tooltip-${i}`} /> : null}
      <div>{s.name.length > 10 ? s.name.slice(0, 10) + "..." : s.name}</div>
    </div>
  ));

  const totalPrice = selected.reduce((aggr, obj) => {
    return aggr + (obj.price ?? 0);
  }, 0);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData("serviceId", id.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = Number(e.dataTransfer.getData("serviceId"));
    const service = data.find((service) => service.id === id);
    service!.disabled = true

    if (service && !selected.some((s) => s.id === id)) {

      setSelected((prev) => [...prev, service]);
    }
  };

  const handleDropBack = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const id = Number(e.dataTransfer.getData("serviceId"));
    const service = selected.find((s) => s.id === id);
    service!.disabled = false;

    if (service) {
      setSelected(selected.filter((s) => s.id !== id));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleServicesListChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      e.currentTarget ===
      e.currentTarget.ownerDocument.querySelector('div[data-dir="left"]')
    ) {
      if (part > 0) {
        setPart(part - 8);
      }
    } else {
      if (part + 10 < data.length) {
        setPart(part + 8);
      }
    }
  };

  return (
    <section className={`${styles.services} container`} id="Services">
        <div className={styles.main}>
          <div className={styles.tagline}>
            <div>Ծառայությունների ցանկ</div>
          </div>
          <div className={styles.wrapper}>
            <Dragger
              data={data}
              part={part}
              handleDropBack={handleDropBack}
              handleDragOver={handleDragOver}
              handleServicesListChange={handleServicesListChange}
              handleDragStart={handleDragStart}
            />

            <div
              className={styles.dragDrop}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <div className={styles.service_wrapper}>
                {selected.length === 0 ? <p>Drop here</p> : selecteds}
              </div>
            </div>
          </div>
          <div className={styles.total}>
            <div>Ընդհանուր: {totalPrice} դրամ</div>
          </div>
        </div>
    </section>
  );
};

export default Services;
