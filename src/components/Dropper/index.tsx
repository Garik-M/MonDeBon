import styles from "@components/Services/Services.module.scss";
import type { ServicesData } from "@/types";
import Left from "@assets/svg/chevron-left.svg";
import Right from "@assets/svg/chevron-right.svg";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "react-tooltip";

type Props = {
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
  selected: ServicesData[];
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  selectsPart: number;
  handleSelectedsListChange: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  handleServiceClick: (service: ServicesData) => void;
};

const Dropper = ({
  handleDragOver,
  selectsPart,
  selected,
  handleDrop,
  handleDragStart,
  handleSelectedsListChange,
  handleServiceClick,
}: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 650 });

  const selecteds = selected
    .slice(selectsPart, selectsPart + (isMobile ? 5 : 10))
    .map((s, i) => (
      <div
        key={s.id}
        className={styles.service}
        draggable
        onClick={() => handleServiceClick(s)}
        onDragStart={(e) => handleDragStart(e, s.id)}
        data-tooltip-content={s.name}
        data-tooltip-id={`tooltip-${i}`}
      >
        {s.name.length > 10 ? <Tooltip id={`tooltip-${i}`} /> : null}
        <div>{s.name.length > 10 ? s.name.slice(0, 10) + "..." : s.name}</div>
      </div>
    ));
  return (
    <div
      className={styles.dragDrop}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {selected.length >= (isMobile ? 5 : 10) ? (
        <div
          className={`${styles.next} ${!selectsPart ? styles.disabled : null}`}
          data-selectedsdir="left"
          onClick={handleSelectedsListChange}
        >
          <Left />
        </div>
      ) : null}
      <div className={styles.service_wrapper}>
        {selected.length === 0 ? <p>Drop here</p> : selecteds}
      </div>
      {selected.length >= (isMobile ? 5 : 10) ? (
        <div
          className={`${styles.next} ${
            selectsPart + (isMobile ? 5 : 10) >= selected.length
              ? styles.disabled
              : null
          }`}
          onClick={handleSelectedsListChange}
        >
          <Right />
        </div>
      ) : null}
    </div>
  );
};
export default Dropper;
