import styles from "@components/Services/Services.module.scss";
import type { ServicesData } from "@/types";
import Left from "@assets/svg/chevron-left.svg";
import Right from "@assets/svg/chevron-right.svg";
import { useMediaQuery } from "react-responsive";

type Props = {
  part: number;
  data: ServicesData[];
  handleDropBack: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleServicesListChange: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
  handlePageSelect: (val: number) => void;
  handleServiceClick: (service: ServicesData) => void;
};

const Dragger = ({
  data,
  part,
  handleDropBack,
  handleDragOver,
  handleServicesListChange,
  handleDragStart,
  handlePageSelect,
  handleServiceClick,
}: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 650 });

  const services = data
    .slice(part, isMobile ? part + 5 : part + 9)
    .map((service) => (
      <div
        key={service.id}
        className={`${styles.service} ${
          service.disabled ? styles.disabled : ""
        }`}
        onClick={() => handleServiceClick(service)}
        draggable
        data-id={service.id}
        onDragStart={(e) => handleDragStart(e, service.id)}
      >
        <div>{service.name}</div>
      </div>
    ));

  const currentVal = part / (isMobile ? 5 : 9) + 1;
  const pagination = () => {
    const pages = [];
    for (let i = 0; i < Math.ceil(data.length / (isMobile ? 5 : 9)); i++) {
      pages.push(i + 1);
    }
    return pages.map((val) => (
      <div
        key={val}
        className={`${styles.box} ${currentVal === val ? styles.active : null}`}
        onClick={() => handlePageSelect(val)}
      >
        {val}
      </div>
    ));
  };

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
      <div className={styles.service_wrapper} style={{ marginBottom: 40 }}>
        {services}
      </div>
      <div className={styles.pagination}>{pagination()}</div>
      <div
        className={`${styles.next} ${
          part > data.length - (isMobile ? 5 : 9) ? styles.disabled : null
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
