import styles from "@components/Services/Services.module.scss";
import type { ServicesData } from "@/types";
import Left from "@assets/svg/chevron-left.svg";
import Right from "@assets/svg/chevron-right.svg";

type Props = {
  part: number;
  data: ServicesData[];
  handleDropBack: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleServicesListChange: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
};

const Dragger = ({
  data,
  part,
  handleDropBack,
  handleDragOver,
  handleServicesListChange,
  handleDragStart,
}: Props) => {
  const services = data.slice(part, part + 8).map((service) => (
    <div
      key={service.id}
      className={`${styles.service} ${service.disabled ? styles.disabled : ""}`}
      draggable
      data-id={service.id}
      onDragStart={(e) => handleDragStart(e, service.id)}
    >
      <div>{service.name}</div>
    </div>
  ));

  return (
    <div
      className={styles.dragDrop}
      onDrop={handleDropBack}
      onDragOver={handleDragOver}
    >
      <div
        className={`${styles.next} ${!part ? styles.disabled : null}`}
        data-dir="left"
        onClick={handleServicesListChange}
      >
        <Left />
      </div>
      <div className={styles.service_wrapper}>{services}</div>
      <div
        className={`${styles.next} ${
          part > data.length - 10 ? styles.disabled : null
        }`}
        data-dir="right"
        onClick={handleServicesListChange}
      >
        <Right />
      </div>
    </div>
  );
};

export default Dragger;
