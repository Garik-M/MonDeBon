import type { ServicesData } from "@/types";
import styles from "./Modal.module.scss";
import Close from "@assets/svg/X.svg";

type Props = {
  modal: ServicesData | undefined;
  setModal: React.Dispatch<React.SetStateAction<ServicesData | undefined>>;
  setSelected: React.Dispatch<React.SetStateAction<ServicesData[]>>;
  selected: ServicesData[];
};

const Modal = ({ modal, setModal, setSelected, selected }: Props) => {
  const isSelected = selected.some((s) => s.id === modal?.id);

  const handleExit = () => {
    setModal(undefined);
  };
  const handleSelect = (service: ServicesData) => {
    if (!isSelected) {
      service.disabled = true;
      setSelected((prev) => [...prev, service]);
      handleExit();
    } else {
      const filtered = selected.filter((s) => s.id !== service.id);
      setSelected(filtered);
      service.disabled = false;
      handleExit();
    }
  };
  return modal?.is ? (
    <div className={styles.modal}>
      <div className={styles.close} onClick={handleExit}>
        <Close />
      </div>
      <div className={styles.title}>{modal.name}</div>
      <div className={styles.desc}>
        {modal.description}
      </div>
      <div className={styles.details}>
        {modal.quantity ? (
          <div className={styles.contain}>քանակ: {modal.quantity}</div>
        ) : null}
        {modal.ages ? (
          <div className={styles.contain}>տարիք: {modal.ages}</div>
        ) : null}
        {modal.duration ? (
          <div className={styles.contain}>տևողություն: {modal.duration}</div>
        ) : null}
        {modal.price ? (
          <div className={styles.contain}>գին: {modal.price} դրամ</div>
        ) : null}
      </div>
      <div className={styles.submit}>
        <button name="ok" className={styles.exit} onClick={handleExit}>
          OK
        </button>
        <button name="select" className={styles.select} onClick={() => handleSelect(modal)}>
          {!isSelected ? "Select" : "Drop Back"}
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
